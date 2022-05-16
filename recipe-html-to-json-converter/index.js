const path = require('path');
const fs = require('fs');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const inputDir = 'example_data';
const directoryPath = path.join(__dirname, inputDir);
const jsdomInstance = new JSDOM();
const { document } = jsdomInstance.window;

const ClassEnum = {
    Title: {
        Tag: 'content-title__text',
    },
    PrepTime: {
        Tag: 'recipe-metadata__prep-time',
    },
    CookTime: {
        Tag: 'recipe-metadata__cook-time',
    },
    ServingSize: {
        Tag: 'recipe-metadata__serving',
    },
    IngredientList: {
        Tag: 'recipe-ingredients__list',
        IgnoreValue: true,
        Children: {
            Ingredients: {
                Tag: 'recipe-ingredients__list-item',
                Children: {
                    Link: {
                        Tag: 'recipe-ingredients__link',
                        Attribute: 'href',
                    },
                },
            },
        },
    },
    IngredientHeadings: {
        Tag: ['recipe-ingredients__heading', 'recipe-ingredients__sub-heading'],
    },
    Method: {
        Tag: 'recipe-method__list-item-text',
    },
}

const elementsToArray = elements => {
    return ([...new Array(elements.length)]).map((_, index) => elements.item(index));
};

const getValuesArray = (item, doc = document) => {
    let elementsArray = new Array();

    if (Array.isArray(item.Tag)) {
        for (let i = 0; i < item.Tag.length; i++) {
            const elements = doc.getElementsByClassName(item.Tag[i]);
            elementsArray = [...elementsArray, ...elementsToArray(elements)];
        }
    } else {
        const elements = doc.getElementsByClassName(item.Tag);
        elementsArray = elementsToArray(elements);
    }

    const valueArray = elementsArray.reduce((prev, curr) => {
        const subItems = {};

        const value = !item.IgnoreValue ? (!!item.Attribute ? curr.getAttribute(item.Attribute) : curr.textContent) : undefined;

        if (!!item.Children) {
            const entries = Object.entries(item.Children);
            for (let i = 0; i < entries.length; i++) {
                subItems[entries[i][0]] = getValuesArray(entries[i][1], curr);
            }

            return [...prev, {
                Value: value,
                ...subItems,
            }];
        }

        return [...prev, value];
    }, []);

    return valueArray.length === 1 ? valueArray[0] : valueArray;
};

const processFile = file => {
    const textContent = fs.readFileSync(`${inputDir}/${file}`, 'utf-8');
    document.body.innerHTML = textContent; //Workaround for JSDOM memory leak

    const result = Object.entries(ClassEnum).reduce((prev, [key, item]) => {
        const res = {
            ...prev,
        };

        res[key] = getValuesArray(item);
        return res;
    }, {});

    return result;
};

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error(err);
    }

    let nonExistCount = 0;

    files.forEach(file => {
        const data = processFile(file);
        let title = String(data.Title);

        if (!title) {
            nonExistCount++;
            title = `${nonExistCount} ${file.replace('.html','')}`;
        }

        fs.writeFileSync(`output/${title.replace('/', '_')}.json`, JSON.stringify(data));
    });
});
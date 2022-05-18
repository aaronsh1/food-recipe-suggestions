const apiUrl = "placementforurl";

let getPantry = () => {
    let pantrySection = document.querySelector("#ingredient-pantry");
    // fetch(apiUrl)
    // .then(response => response.json())
    // .then(data.map(
    //     ingredient => addIngredientsToPage(ingredient, pantrySection)
    // ));

    const ingredientArr = [
        {
            name: "apple",
            image: "/images/ingredients/croissant.png"
        },
        {
            name: "banana",
            image: "/images/ingredients/croissant.png"
        },
        {
            name: "carrot",
            image: "/images/ingredients/croissant.png"
        },
        {
            name: "banana",
            image: "/images/ingredients/croissant.png"
        },
        {
            name: "carrot",
            image: "/images/ingredients/croissant.png"
        },
        {
            name: "banana",
            image: "/images/ingredients/croissant.png"
        },
        {
            name: "carrot",
            image: "/images/ingredients/croissant.png"
        },
        {
            name: "banana",
            image: "/images/ingredients/croissant.png"
        },
        {
            name: "carrot",
            image: "/images/ingredients/croissant.png"
        },
        {
            name: "banana",
            image: "/images/ingredients/croissant.png"
        },
        {
            name: "carrot",
            image: "/images/ingredients/croissant.png"
        },
    ];
    ingredientArr.map(
        item => addIngredientsToPage(item, pantrySection)
    );
}

let addIngredientsToPage = (ingredient, pantrySection) => {
    let ingredientToAdd = document.createElement("pantry-ingredient");
    ingredientToAdd.name = ingredient.name;
    ingredientToAdd.image = ingredient.image;
    console.log(ingredient.name);

    pantrySection.appendChild(ingredientToAdd);
}

let addIngredient = (ingredient) => {
    // let addIngredientForm = document.getElementsByClassName("add-ingredient-form");
    // let form = FormData(addIngredientForm);

    // let ingredientToAdd = {
    //     "User": form.user,
    //     "Name": form.name
    // }

    // fetch(apiUrl, {
    //     method: "POST",
    //     body: ingredientToAdd
    // })
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })

    let bodyChildren = document.querySelectorAll("body > *:not(add-ingredient-modal)");
    bodyChildren.forEach(child => child.classList -= " blur");

    // rerender page
}

let getIngredients = (userId) => {
    // query on db to get ingredients
}

let modalPopUp = () => {
    let modalToAdd = document.createElement("add-ingredient-modal");
    document.body.appendChild(modalToAdd);
    let bodyChildren = document.querySelectorAll("body > *:not(add-ingredient-modal)");
    bodyChildren.forEach(child => child.classList += " blur");
}

let submitIngredientHandler = () => {
    addIngredient();
}

let addIngredientButtonHandler = () => {
    // adjust css to blur background and modal pop up
    modalPopUp();
    document.querySelector("#add-ingredient-submit").addEventListener("click", submitIngredientHandler);
}

document.querySelector("#add-ingredient-fab").addEventListener("click", addIngredientButtonHandler);


// Run methods
getPantry();
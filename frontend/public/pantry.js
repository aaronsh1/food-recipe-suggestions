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
    let addIngredientForm = document.getElementsByClassName("add-ingredient-form");
    let form = FormData(addIngredientForm);

    let ingredientToAdd = {
        "User": form.user,
        "Name": form.name
    }

    fetch(apiUrl, {
        method: "POST",
        body: ingredientToAdd
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

    // rerender page
}

let getIngredients = (userId) => {
    // query on db to get ingredients
}

let addIngredientButtonHandler = () => {
    // adjust css to blur background and modal pop up


}

let modalPopUp = () => {
    document.body.appendChild("add-ingredient-modal");
    document.body.className += " blur";
}


// Run methods
getPantry();
const apiUrl = "placementforurl";

const getPantry = () => {
    let pantrySection = document.querySelector("#ingredient-pantry");
    // fetch(apiUrl+"/pantry", new URLSearchParams({
    //     id: 1,
    // }))
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

const addIngredientsToPage = (ingredient, pantrySection) => {
    let ingredientToAdd = document.createElement("pantry-ingredient");
    ingredientToAdd.name = ingredient.name;
    ingredientToAdd.image = ingredient.image;
    console.log(ingredient.name);

    pantrySection.appendChild(ingredientToAdd);
}

const addIngredient = (ingredient) => {
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

    let bodyChildren = document.querySelectorAll("body > *:not(add-ingredient-modal)");
    bodyChildren.forEach(child => child.classList -= " blur");
}

const modalPopUp = () => {
    let modalToAdd = document.createElement("add-ingredient-modal");
    document.body.appendChild(modalToAdd);
    let bodyChildren = document.querySelectorAll("body > *:not(add-ingredient-modal)");
    bodyChildren.forEach(child => child.classList += " blur");
}

const deleteIngredient = (ingredientId) => {
    fetch(apiUrl, {
        method: "DELETE",
        body: ingredientId
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Handlers

const submitIngredientHandler = () => {
    addIngredient();
}

const addIngredientButtonHandler = () => {
    // adjust css to blur background and modal pop up
    modalPopUp();
    document.querySelector("#add-ingredient-submit").addEventListener("click", submitIngredientHandler);
}

const deleteButtonHandler = (id) => {
    deleteIngredient(id);
}


// Add event listeners
document.querySelector("#add-ingredient-fab").addEventListener("click", addIngredientButtonHandler);


// Run methods
getPantry();
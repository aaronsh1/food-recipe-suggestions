import { html, css, LitElement } from 'lit';
import { PantryStyles } from '../../styles/pantry';

export class Pantry extends LitElement {
    static styles = PantryStyles;

    static properties = {
        ingredientArr: []
    }

    constructor() {
        super();
        this.getPantry();
    }

    apiUrl = "placementforurl";

    getPantry = () => {
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
                id: 1,
                name: "apple",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "banana",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "carrot",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "banana",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "carrot",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "banana",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "carrot",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "banana",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "carrot",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "banana",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "carrot",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "carrot",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "banana",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "carrot",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "banana",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "carrot",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "banana",
                image: "/public/images/ingredients/croissant.png"
            },
            {
                id: 1,
                name: "carrot",
                image: "/public/images/ingredients/croissant.png"
            },
        ];
        this.ingredientArr = ingredientArr;
    }
    
    addIngredientsToPage = (ingredient, pantrySection) => {
        let ingredientToAdd = document.createElement("pantry-ingredient");
        ingredientToAdd.name = ingredient.name;
        ingredientToAdd.image = ingredient.image;
        console.log(ingredient.name);
    
        pantrySection.appendChild(ingredientToAdd);
    }
    
    addIngredient = (ingredient) => {
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
    
    modalPopUp = () => {
        let screenFilm = document.createElement("section");
        screenFilm.style = css `
            filter: blur(4);
            transition: 0.5s;
            position: fixed;
            z-index: 1;
            width: 100%;
            top: 0;
            left: 0;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        `
        document.body.appendChild(screenFilm);
        let modalToAdd = document.createElement("add-ingredient-modal");
        document.body.appendChild(modalToAdd);
        let bodyChildren = document.querySelector("pantr-a");
        // bodyChildren.classList += " blur";
        bodyChildren.forEach(child => child.classList += " blur");
    }
    
    // Handlers
    submitIngredientHandler = () => {
        addIngredient();
    }
    
    addIngredientButtonHandler = () => {
        // adjust css to blur background and modal pop up
        this.modalPopUp();
        document.querySelector("#add-ingredient-submit").addEventListener("click", submitIngredientHandler);
    }

    render() {
        return html`
        <h1>My Pantry</h1>
        <h2 class="pantry-subheading">View all of your current ingredients and add/remove</h2>
    
        <section id="ingredient-pantry">
        ${
            this.ingredientArr.map(
                ingr => html `
                    <pantry-ingredient name=${ingr.name} image=${ingr.image} id=${ingr.id}></pantry-ingredient>
                `
            )
        }
        </section>
        <button @click="${this.addIngredientButtonHandler}" id="add-ingredient-fab">+</button>
        `;
    }
}

customElements.define("pantry-a", Pantry);
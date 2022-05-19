import { html, css, LitElement } from 'lit';
import { fetchApi } from '../../api/fetchApi';
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

    getPantry = () => {
        let token = window.localStorage.getItem("token");

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        console.log(JSON.parse(jsonPayload));


        let pantrySection = document.querySelector("#ingredient-pantry");
        // fetchApi({
        //     endpoint: 'pantry',
        //     data: {
        //         UserId: 1
        //     },
        //     method: "GET"
        // })
        // .then(res => {
        //     if (res.status == 200) {
        //         console.log(data);
        //         this.ingredientArr = data;
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        // })
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
            "UserId": 1,
            "IngredientId": form.ingredient.value
        }
    
        fetchApi({
            endpoint: 'pantry',
            data: {
                ingredientToAdd
            },
            method: "POST"
        })
        .then(res => {
            if(res.status == 200) {
                this.shadowRoot.querySelector("#add-ingredient-modal").remove();
                document.querySelector("#screen-film").remove();
            }
        })
        .catch(err => {
            console.log(err)
        })
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
    }
    
    // Handlers
    submitIngredientHandler = () => {
        addIngredient();
    }
    
    addIngredientButtonHandler = () => {
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
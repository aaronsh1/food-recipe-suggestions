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
        this.ingredientArr = [];
        this.getPantry();
    }

    getPantry = () => {
        let pantrySection = document.querySelector("#ingredient-pantry");
        fetchApi({
            endpoint: 'pantry',
            method: "GET",
            token: window.localStorage.getItem("token")
        })
        .then(res => {
            if (res.status == 200) {
                // console.log(JSON.stringify(res.data));
                // this.ingredientArr = JSON.parse(JSON.stringify(res.data));
                this.ingredientArr = res.data;
            }
        })
        .catch(err => {
            console.log(err);
        })

        // console.log(this.ingredientArr);
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
        screenFilm.setAttribute("id", "screen-film");
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
                ingr => {
                return html `
                    <pantry-ingredient name="${ingr.IngredientName}" image="${ingr.Image}" id="${ingr.IngredientId}"></pantry-ingredient>
                `;
                }
            )
        }
        </section>
        <button @click="${this.addIngredientButtonHandler}" id="add-ingredient-fab">+</button>
        `;
    }
}

customElements.define("pantry-a", Pantry);
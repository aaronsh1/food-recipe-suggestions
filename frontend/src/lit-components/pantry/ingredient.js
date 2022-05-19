import {html, css, LitElement} from 'lit';
import { IngredientStyles } from '../../styles/ingredient';

export class PantryIngredient extends LitElement {
    static styles = IngredientStyles;

    static properties = {
        id: 0,
        name: "",
        image: ""
    }

    constructor(id, name, image) {
        super();
        this.id = id;
        this.name = name;
        this.image = image;
    }

    deleteModalPopUp = () => {
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
        screenFilm.setAttribute("id", "screen-film")
        document.body.appendChild(screenFilm);
        let modalToAdd = document.createElement("delete-modal");
        modalToAdd.setAttribute("ingredientId", this.id)
        document.body.appendChild(modalToAdd);
    }

    deleteIngredient = () => {
        // fetch(apiUrl, {
        //     method: "DELETE",
        //     body: ingredientId
        // })
        // .then((res) => {
        //     console.log(res);
        // })
        // .catch((err) => {
        //     console.log(err);
        // })

        document.querySelector("#delete-ingredient-modal").classList += " show-modal"

        console.log(`delete ingredient: ${this.id}`);
    }

    render() {
        return html `
        <article class="ingredient-block">
            <button alt="delete icon" class="delete-ingredient"><img src="/public/images/ingredients/delete.png" @click=${this.deleteModalPopUp}/></button>
            <img src=${this.image} alt="ingredient-pic"  class="ingredient-pic"/>
            <footer class="ingredient-name">${this.name}</footer>
        </article>
        `
    }
}

customElements.define(`pantry-ingredient`, PantryIngredient);
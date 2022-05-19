import {html, LitElement} from 'lit';
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

        console.log(`delete ingredient: ${this.id}`);
    }

    render() {
        return html `
        <article class="ingredient-block">
            <button alt="delete icon" class="delete-ingredient"><img src="/public/images/ingredients/delete.png" @click=${this.deleteIngredient}/></button>
            <img src=${this.image} alt="ingredient-pic"  class="ingredient-pic"/>
            <footer class="ingredient-name">${this.name}</footer>
        </article>
        `
    }
}

customElements.define(`pantry-ingredient`, PantryIngredient);
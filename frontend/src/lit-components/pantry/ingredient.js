import {html, LitElement} from 'lit';
import { IngredientStyles } from '../../styles/ingredient';

export class PantryIngredient extends LitElement {
    static styles = IngredientStyles;

    static get properties()  {
        return {
        name: {type: String},
        image: {type: String},
        selected: {type: Boolean}
        }
    }

    constructor() {
        super();
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

        //console.log(`delete ingredient: ${this.id}`);
    }



    render() {
        return html `
        <article @click='${this.changeColor}' class="ingredient-block ${this.selected ? 'selected' : 'unselected'}">
            <button alt="delete icon" class="delete-ingredient"><img src="/public/images/ingredients/delete.png" @click=${this.deleteIngredient}/></button>
            <img src=${this.image} alt="ingredient-pic"  class="ingredient-pic"/>
            <footer class="ingredient-name">${this.name}</footer>
        </article>
        `
    }

    changeColor() {
        this.selected = !this.selected;
    }
}

customElements.define(`pantry-ingredient`, PantryIngredient);
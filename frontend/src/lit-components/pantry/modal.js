import {html, LitElement} from 'lit'
import { ModalStyles } from '../../styles/modal';

export class AddIngredientModal extends LitElement {
    static styles = ModalStyles;

    static properties = {
        title: "",
        ingredientList: []
    }

    constructor() {
        super();
        this.title = "Add Ingredient";
        // this.ingredinetList = () => {
        //     // query on db to return ingredients
        // };
        this.ingredientList = ["cookie", "banana", "apple"];
    }

    render() {
        () => {
            fetch(apiUrl)
            .then(response => response.json())
            .then(data.map(
                item => this.ingredientList.push(item)
            ))
        };

        return html`
            <section id="add-ingredient-modal">
                <header class="add-ingr-modal-title">${this.title}</header>
                <form class="add-ingredient-form">
                    <label class="add-modal-form-element" name="ingredient">Choose Category</label>
                    <select class="add-modal-form-element" id="modal-dropdown" name="ingredient">
                    ${this.ingredientList.map(
                        item =>  html`<option class="ingredient-option" value=${item}>${item}</option>`
                    )}
                    </select>
                    <input class="add-modal-form-element" id="add-ingredient-submit" type="submit" value="Done"></input>
                </form>
            </section>
        `
    }
}

customElements.define("add-ingredient-modal", AddIngredientModal);
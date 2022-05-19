import {html, LitElement} from 'lit'
import { fetchApi } from '../../api/fetchApi';
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
        fetchApi({
            endpoint: 'ingredient/all',
            method: "GET"
        })
        .then(res => {
            if(res.status == 200) {
                this.ingredientList = res.data;
            }
        })
        .catch(err => {
            console.log(err)
        });
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
                        item =>  html`<option class="ingredient-option" value=${item.id}>${item.name}</option>`
                    )}
                    </select>
                    <input class="add-modal-form-element" id="add-ingredient-submit" type="submit" value="Done" />
                </form>
            </section>
        `
    }
}

customElements.define("add-ingredient-modal", AddIngredientModal);
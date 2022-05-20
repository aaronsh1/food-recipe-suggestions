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
            method: "GET",
            token: window.localStorage.getItem("token")
        })
        .then(res => {
            if(res.status == 200) {
                console.log(JSON.stringify(res.data))
                this.ingredientList = res.data;
            }
        })
        .catch(err => {
            console.log(err)
        });
    }

    addIngredient = () => {
        let ingredient = this.shadowRoot.querySelector("#modal-dropdown").value;
    
        fetchApi({
            endpoint: 'pantry',
            data: {
                "Ingredients": [ingredient]
            },
            method: "POST",
            token: window.localStorage.getItem("token")
        })
        .then(res => {
            if(res.status == 200) {
                this.shadowRoot.querySelector("#add-ingredient-modal").remove();
                document.querySelector("#screen-film").remove();
                window.location.href = '/pantry';
            }
        })
        .catch(err => {
            console.log("ERR: " + err);
        })
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
                    <select onfocus='this.size=3;' onblur='this.size=1;' onchange='this.size=1; this.blur();'class="add-modal-form-element" id="modal-dropdown" name="ingredient">
                    ${this.ingredientList.map(
                        item =>  html`<option class="ingredient-option" value=${item.IngredientId}>${item.IngredientName}</option>`
                    )}
                    </select>
                    <button type="button" class="add-modal-form-element" id="add-ingredient-submit" @click=${this.addIngredient}>Done</button>
                </form>
            </section>
        `
    }
}

customElements.define("add-ingredient-modal", AddIngredientModal);
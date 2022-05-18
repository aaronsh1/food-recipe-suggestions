import {html, css, LitElement} from 'lit'

export class AddIngredientModal extends LitElement {
    static styles = css`
    #add-ingredient-modal {
        position: fixed;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        margin: auto;
        width: 40%;
        height: auto;

    }

    .add-ingr-modal-title {
        background-color: #E76F51;
        padding: 3% 0;
        width: 100%;
        border-radius: 5em 5em 0 0;
    }

    .add-ingredient-form {
        width: 100%;
        background-color: #F4A261;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 0 0 5em 5em;
    }

    .add-modal-form-element {
        padding: 3%;
        margin: 3% auto;
    }

    #modal-dropdown {
        width: 50%;
        padding: 1%;
        border: none;
    }

    #add-ingredient-submit {
        height: 0.5em;
        border: none;
        border-radius: 5em;
        background-color: rgb(6, 108, 96);
        color: rgb(244, 162, 97);
        text-align: center;
    }

    .ingredient-option {
        width: 50%;
    }

    `;

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
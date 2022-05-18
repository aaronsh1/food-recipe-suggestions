import {html, css, LitElement} from 'lit'

export class AddIngredientModal extends LitElement {
    static styles = css``;

    static properties = {
        title: "",
        ingredientList: []
    }

    constructor() {
        super();
        this.title = "Add Ingredient";
        this.ingredinetList = () => {
            // query on db to return ingredients
        };
    }

    render() {
        return html`
            <section>
                <header>{this.title}</header>
                <form action="../js/" class="add-ingredient-form">
                    <label name="ingredient">Choose Category</label>
                    <select name="ingredient">
                    {this.ingredientList.map(
                        item => <option name={item.name}>{item.name}</option>
                    )}
                    </select>
                </form>
            </section>
        `
    }
}

customElements.define("add-ingredient-modal", AddIngredientModal);
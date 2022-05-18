import {html, css, LitElement} from 'lit';

export class PantryIngredient extends LitElement {
    static styles = css `
    .ingredient-block {
        height: 80%;
        border: none;
        border-radius: 15px;
        background-color: #E9C46A;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 3%;
    }
    .ingredient-pic {
        width: 40%;
        margin: auto;
    }

    .delete-ingredient {
        width: 20%;
        margin: 5%;
        position: relative;
        float: left;
    }
    .ingredient-name {
        margin: auto 0;
        width: 100%;
        text-align: center;
        background-color: #FFECBD;
        padding: 3% 0;
    }
    `;

    static properties = {
        name: "",
        image: ""
    }

    constructor(name, image) {
        super();
        this.name = name;
        this.image = image;
    }

    render() {
        return html `
        <article class="ingredient-block">
            <input type=image src="/images/ingredients/delete.png" alt="delete icon" class="delete-ingredient"/>
            <img src=${this.image} alt="ingredient-pic"  class="ingredient-pic"/>
            <footer class="ingredient-name">${this.name}</footer>
        </article>
        `
    }
}

customElements.define(`pantry-ingredient`, PantryIngredient);
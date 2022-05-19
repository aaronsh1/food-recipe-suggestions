import { html, css, LitElement } from 'lit';
import { DeleteModalStyles } from '../../styles/deleteModal';

export class DeleteModal extends LitElement {
    static styles = DeleteModalStyles;

    static properties = {
        ingredientId: 0
    }

    constructor(ingredientId) {
        super();
        this.ingredientId = ingredientId;
    }

    yesClickHandler = (id) => {
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

        console.log(id);
        console.log(this);
        this.shadowRoot.querySelector("#delete-ingredient-modal").remove();
        document.querySelector("#screen-film").remove();
    }

    noClickHandler = () => {
        console.log("no");
        console.log("2");
        this.shadowRoot.querySelector("#delete-ingredient-modal").remove();
        document.querySelector("#screen-film").remove();
        console.log("3");
        console.log("4");
    }

    render() {
        return html`
            <section id="delete-ingredient-modal">
                <header class="del-ingr-modal-title">TEST</header>
                <h2>Are you sure you want to delete TEST from your pantry?</h2>
                <section class="delete-buttons">
                    <button id="delete-yes" class="delete-button" @click=${() => this.yesClickHandler(this.ingredientId)}>Yes</button>
                    <button id="delete-no" class="delete-button" @click=${this.noClickHandler}>No</button>
                </section>
            </section>
        `
    }
}

customElements.define("delete-modal", DeleteModal);
import { html, css, LitElement } from 'lit';
import { fetchApi } from '../../api/fetchApi';
import { DeleteModalStyles } from '../../styles/deleteModal';

export class DeleteModal extends LitElement {
    static styles = DeleteModalStyles;

    static properties = {
        ingredientId: 0
    }

    constructor(ingredientId, ingredientName) {
        super();
        this.ingredientId = ingredientId;
        this.ingredientName = ingredientName;
    }

    yesClickHandler = () => {
        fetchApi({
            endpoint: 'pantry',
            data:{
                IngredientId: [this.ingredientId]
            },
            method: "DELETE",
            token: window.localStorage.getItem("token")
        })
        .then(res => {
            if(res.status == 200) {
                this.shadowRoot.querySelector("#delete-ingredient-modal").remove();
                document.querySelector("#screen-film").remove();
            }
        })
        .catch(err => {
            console.log(err);
        })
        window.location.href = '/pantry';
    }

    noClickHandler = () => {
        this.shadowRoot.querySelector("#delete-ingredient-modal").remove();
        document.querySelector("#screen-film").remove();
    }

    render() {
        return html`
            <section id="delete-ingredient-modal">
                <header class="del-ingr-modal-title">${this.ingredientName}</header>
                <h2>Are you sure you want to delete ${this.ingredientName} from your pantry?</h2>
                <section class="delete-buttons">
                    <button id="delete-yes" class="delete-button" @click=${this.yesClickHandler}>Yes</button>
                    <button id="delete-no" class="delete-button" @click=${this.noClickHandler}>No</button>
                </section>
            </section>
        `
    }
}

customElements.define("delete-modal", DeleteModal);
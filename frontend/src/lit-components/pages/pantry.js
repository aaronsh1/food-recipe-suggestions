import { html, LitElement } from 'lit';
import { PantryStyles } from '../../styles/pantry';

export class Pantry extends LitElement {
    static styles = PantryStyles;

    static properties = {}

    constructor() {
        super();
    }

    render() {
        return html`
        <h1>My Pantry</h1>
        <h2 class="pantry-subheading">View all of your current ingredients and add/remove</h2>
    
        <section id="ingredient-pantry">
        </section>
        <button id="add-ingredient-fab">+</button>
    
    
        <script src='/bundle.js'></script>
        <script src='/pantry.js'></script>
        `;
    }
}

customElements.define("pantry-a", Pantry);
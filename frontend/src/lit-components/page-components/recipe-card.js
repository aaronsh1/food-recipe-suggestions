import { html, LitElement } from 'lit';

import { RecipeCardStyles } from '../../styles';


export class RecipeCard extends LitElement {
  static styles = RecipeCardStyles;

  static get properties() {
    return {
      name: {type: String},
      description: {type: String},
    };
  }
//Name, Description, Image, author
  constructor() {
    super();

  }

  render() {
    return html`
        <article class='recipe-container'>
          <h4>${this.name}</h4>
          <img class='recipe-image' src='/public/images/test-favourite.png'>
          <p>${this.description}</p>
        </article>
        
    `;
  }

}
customElements.define('recipe-card', RecipeCard);
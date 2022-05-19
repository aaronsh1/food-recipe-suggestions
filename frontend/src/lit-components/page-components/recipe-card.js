import { html, LitElement } from 'lit';

import { RecipeCardStyles } from '../../styles';


export class RecipeCard extends LitElement {
  static styles = RecipeCardStyles;

  static get properties() {
    return {
      name: {type: String},
      description: {type: String},
      author: {type: String}
    };
  }
//Name, Description, Image, author
  constructor() {
    super();

  }

  render() {
    return html`
        <article>

          <aside>
            <img src="public/images/lily-banse--YHSwy6uqvk-unsplash.jpg" height="250px" width="375px"/>
          </aside>

          <section>
            <h1>${this.name}</h1>
            <address>${(!this.author)? "" : 'by ' + this.author}</address>
            <p>${this.description}</p>
          </section>
          
        </article>
        
    `;
  }

}
customElements.define('recipe-card', RecipeCard);
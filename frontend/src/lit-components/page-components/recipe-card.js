import { html, LitElement } from 'lit';

import { RecipeCardStyles } from '../../styles';


export class RecipeCard extends LitElement {
  static styles = RecipeCardStyles;

  static get properties() {
    return {
      recipeId: {type: Number},
      name: {type: String},
      image: {type: String},
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
        <article @click="${() => window.location.href = "/recipe?id=" + this.recipeId}">

          <aside>
            <img src="${(!this.image)? '/public/images/lily-banse--YHSwy6uqvk-unsplash.jpg' : this.image}" height="250px" width="375px"/>
          </aside>

          <section>
            <h1>${this.name}</h1>
            <address>${(!this.author)? "by Anon" : 'by ' + this.author}</address>
            <p>${this.description}</p>
          </section>
          
        </article>
        
    `;
  }

}
customElements.define('recipe-card', RecipeCard);
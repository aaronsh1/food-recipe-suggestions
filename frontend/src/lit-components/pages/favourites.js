import { html, LitElement } from 'lit';

import { FavouritesStyles } from '../../styles';


export class Favourites extends LitElement {
  static styles = FavouritesStyles;

  static get properties() {
    return {
      recipes: {}
    };
  }
//Name, Description, Image, author
  constructor() {
    super();
    this.recipes = [{name: 'Chicken Parmesan Pasta', description: 'The salty goodness of crisped pork belly transfers over to the leaner white meat.'},{name: 'Something food', description: 'tastty stuff i think.'},{name: 'Chicken Parmesan Pasta', description: 'The salty goodness of crisped pork belly transfers over to the leaner white meat.'},{name: 'Something food', description: 'tastty stuff i think.'}]

    Object.keys.f
  }

  render() {
    return html`
      <main>
        <header><h1>Your Favourite Recipes</h1></header>

        ${this.recipes.map((i,index) => html`
        
        <recipe-card class="recipeCard" id='${index}' .name='${i.name}' .description='${i.description}' @click='${this._recipeClicked}'></recipe-card>
        
        
        `)}

      </main>
    `;
  }


  _recipeClicked(e) {
  
    console.log(e.target.id);

    let index = e.target.id;
    this.recipes.splice(index,1)
   
  }
}
customElements.define('favourites-page', Favourites);
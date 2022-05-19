import { html, LitElement } from 'lit';
import { fetchApi } from '../../api/fetchApi';

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
    console.log('constructor');

    fetchApi({
      endpoint: 'favourites',
      method: 'GET',
      token: window.localStorage.getItem('token'),
    })
    .then(res => {
      if (res.status === 200) {
        this.recipes = res.data;
      }
    })
    .catch();
    //this.recipes = [{name: 'Chicken Parmesan Pasta', description: 'The salty goodness of crisped pork belly transfers over to the leaner white meat.'},{name: 'Something food', description: 'tastty stuff i think.'},{name: 'Chicken Parmesan Pasta', description: 'The salty goodness of crisped pork belly transfers over to the leaner white meat.'},{name: 'Something food', description: 'tastty stuff i think.'}];
  }

  render() {
    return html`
      <section class='favourites-container'>
        <header><h1>Your Favourite Recipes</h1></header>

        <ul class='recipes-container'>
        ${this.recipes.map((i,index) => html`
        
        <recipe-card recipeId='${i.RecipeId}' name='${i.RecipeName}' .description='${i.Description}' image='${i.Image}' author='${i.Author}' @click='${this._recipeClicked}'></recipe-card>
        
        
        `)}

        </ul>

      </section>
    `;
  }


  _recipeClicked(e) {
  
    console.log(e.target.id);

    let index = e.target.id;
    this.recipes.splice(index,1)
   
  }
}
customElements.define('favourites-page', Favourites);
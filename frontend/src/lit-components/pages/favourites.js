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

    // this.recipes = [{
    //   RecipeId: 1,
    //   Description: "some description",
    //   Image: null,
    //   Author: null,
    // }];
    //this.recipes = [{name: 'Chicken Parmesan Pasta', description: 'The salty goodness of crisped pork belly transfers over to the leaner white meat.'},{name: 'Something food', description: 'tastty stuff i think.'},{name: 'Chicken Parmesan Pasta', description: 'The salty goodness of crisped pork belly transfers over to the leaner white meat.'},{name: 'Something food', description: 'tastty stuff i think.'}];
  }

  render() {
    return html`
      <main>
        <header><h1>Your Favourite Recipes</h1></header>

        ${(this.recipes.length == 0)? html`<p>No Results :(</p>` : ''}
        ${this.recipes.map((i) => html`
        
        <recipe-card class="recipeCard"  recipeId='${i.RecipeId}' name='${i.RecipeName}' .description='${i.Description}' image='${i.Image}' author='${i.Author}' @click='${this._recipeClicked}'></recipe-card>
        
        
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
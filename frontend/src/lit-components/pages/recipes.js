import { html, LitElement } from 'lit';
import { RecipesStyles } from '../../styles';
import { fetchApi } from '../../api/fetchApi';

export class Recipes extends LitElement {
  static styles = RecipesStyles;
  
  static properties = {
    recipesArr: []
  }

  constructor() {
    super();

    let ingredientIds = null;
    this.recipesArr = [];

    try {
      let queryParamString = window.location.href.replace(/http(s)?:\/\/.+\/\??/, '') //Remove full route

      console.log(queryParamString);

      if (queryParamString.length !== 0) {
        ingredientIds = queryParamString.split("&").map(param => param.split("=")[1]).map((element) => Number.parseInt(element));
      }

      console.log(ingredientIds);

    } catch {
      ingredientIds = null;
    }

    if (!ingredientIds) {
      console.log("All");
      this.getAllRecipes();

    } else {
      console.log("Search");
      this.getSearchRecipes(ingredientIds);
    }
  }

  async getSearchRecipes(ingredients) {

    try {
      let res = await fetchApi({
        endpoint: 'recipe/search',
        method: 'POST',
        data: {IngredientIds: ingredients}
      });

      if (res.status != 200) {
        alert("Server returned error code: " + res.status);
        return;
      }

      this.recipesArr = res.data;

    } catch (error){
      alert("Something bad went wrong: " + JSON.stringify(error));
    }
  }

  async getAllRecipes() {

    try {
      let res = await fetchApi({
        endpoint: 'recipe/all',
        method: 'GET',
      });

      if (res.status != 200) {
        alert("Server returned error code: " + res.status);
        return;
      }

      this.recipesArr = res.data;

    } catch (error){
      alert("Something bad went wrong: " + JSON.stringify(error));
    }
  }

  render() {
    return html`
      <main>
        
        <section class="pageHead">
          <h1>Browse Recipes...</h1>
        </section>

        ${(this.recipesArr.length == 0)? html`<p>No Results :(</p>` : ''}

        ${this.recipesArr.map(
          recipe => html `<recipe-card class="recipeCard" recipeId=${recipe.RecipeId} name=${recipe.RecipeName} image=${recipe.Image} description=${recipe.Description} author=${recipe.Author}></recipe-card>`
        ) }
      </main>
    `;
  }
}
customElements.define('recipes-page', Recipes);
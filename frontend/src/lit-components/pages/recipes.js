import { html, LitElement } from 'lit';
import { RecipesStyles } from '../../styles';

export class Recipes extends LitElement {
  static styles = RecipesStyles;
  
  static properties = {
    recipesArr: []
  }

  constructor() {
    super();

    try {
      let queryParamString = window.location.href.replace(/http(s)?:\/\/.+\?/, '') //Remove full route
      let ingredientIds = queryParamString.split("&").map(param => param.split("=")[1]);

      ingredientIds.forEach(element => {
        
      });

      this.recipe = this.getRecipe(recipeIdInt);

    } catch {
      this.redirectToRecipesPage();
    }

    this.recipesArr = this.getRecipes();
  }

  getRecipes(ingredients) {
    return [
      {
        RecipeId: 0,
        RecipeName: "Lasagna",
        Description: "This is a very long and detailed description of how to make the above mentioned delicious food item.",
        Image: "public/images/lily-banse--YHSwy6uqvk-unsplash.jpg",
        Author: "Johann Schepers"  
      },
      {
        RecipeId: 1,
        RecipeName: "Pizza",
        Description: "This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.",
        Image: "public/images/lily-banse--YHSwy6uqvk-unsplash.jpg",
        Author: "Johann Schepers"  
      }
    ]
  }

  render() {
    return html`
      <main>
        
        <section class="pageHead">
          <h1>Browse Recipes...</h1>
        </section>

        ${this.recipesArr.map(
          recipe => html `<recipe-card class="recipeCard" recipeId=${recipe.RecipeId} name=${recipe.RecipeName} image=${recipe.Image} description=${recipe.Description} author=${recipe.Author}></recipe-card>`
        ) }
      </main>
    `;
  }
}
customElements.define('recipes-page', Recipes);
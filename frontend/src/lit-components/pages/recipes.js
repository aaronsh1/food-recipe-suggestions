import { html, LitElement } from 'lit';
import { RecipesStyles } from '../../styles';

export class Recipes extends LitElement {
  static styles = RecipesStyles;
  
  static get properties() {
    return {
      recipesArr: {},
    };
  }

  constructor() {
    super();

    this.recipesArr = this.getRecipes();
  }

  getRecipes() {
    return [
      {
        RecipeId: 0,
        RecipeName: "Lasagna",
        Description: "This is a very long and detailed description of how to make the above mentioned delicious food item.",
        Image: "",
        Author: "Johann Schepers"  
      },
      {
        RecipeId: 0,
        RecipeName: "Pizza",
        Description: "This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.This is a very long and detailed description of how to make the above mentioned delicious food item.",
        Image: "",
        Author: "Johann Schepers"  
      }
    ]
  }

  render() {
    return html`
      <main>
        
        <section class="pageHead">
          <h1>Browse Recipes...</h1>
          <button>Add Recipe</button>
        </section>

        ${this.recipesArr.map(
          recipe => html `<recipe-card class="recipeCard" .name=${recipe.RecipeName} .description=${recipe.Description} .author=${recipe.Author}></recipe-card>`
        ) }
      </main>
    `;
  }

  _changePasswordClick(e) {
    console.log(this.showPasswordChangeInputs);
    this.showPasswordChangeInputs = true;
    this.collapseBanner = true;
}

_discard(e) {
    this.showPasswordChangeInputs = false;
    this.collapseBanner = false;
}

_apply(e) {

}
}
customElements.define('recipes-page', Recipes);


import { html, LitElement } from 'lit';
import { RecipeViewStyles } from '../../styles';

export class RecipeView extends LitElement {
  static styles = RecipeViewStyles;
  
  static properties = {
    recipe: {}
  }

  constructor() {
    super();

    try {
      let queryParamString = window.location.href.replace(/http(s)?:\/\/.+\?/, '') //Remove full route
      let param = queryParamString.split("&")[0];
      let recipeId = param.split("=")[1];

      let recipeIdInt = Number.parseInt(recipeId);

      if (isNaN(recipeIdInt)) {
        this.redirectToRecipesPage();
      }

      this.recipe = this.getRecipe(recipeIdInt);

    } catch {
      this.redirectToRecipesPage();
    }
  }

  redirectToRecipesPage() {
    window.location.href = "/recipes";
  }

  split(input) {
    return input.split('\n');
  }

  getRecipe(recipeId) {
    console.log("RecipeId: " + recipeId);

    return {
      RecipeId: 0,
      RecipeName: "Beefy Supreme (Burger)",
      Description: "This is a very long and detailed description of how to make the above mentioned delicious food item.",
      Method: this.split("This is a very long method description of how to combine this very specific combination of ingredients into a tasty food item.\n This is the second line of this very long method!!!\nThis is the 3rd line."),
      Image: "public/images/lily-banse--YHSwy6uqvk-unsplash.jpg",
      Author: "Johann Schepers",
      Ingredients: ["Tomato", "Lettuce", "Beef Patty", "Burger Bun"]
    }
  }

  render() {
    return html`
      <main>
        <section class="header">
          <header>
            <h1>Recipe: ${this.recipe.RecipeName}</h1>
            <address>by ${(!this.recipe.Author)? "Anon": this.recipe.Author}</address>
            <p>${this.recipe.Description}</p>

            ${this.recipe.Ingredients.map(ingredient => {
              return html`<input type="button" value="${ingredient}"/>`
            })}
          </header>

          <aside>
            <img src="${this.recipe.Image}" width="400px"/>
          </aside>
        </section>

        <section>
          <h1>Method:</h1>

          ${this.recipe.Method.map(line => {
            return html`<p>${line}</p>`;
          })}
        </section>
        
      </main>
    `;
  }
}
customElements.define('recipe-view-page', RecipeView);


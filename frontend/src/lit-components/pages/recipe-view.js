import { html, LitElement } from 'lit';
import { RecipeViewStyles } from '../../styles';

export class RecipeView extends LitElement {
  static styles = RecipeViewStyles;
  
  static properties = {
    recipe: {}
  }

  constructor() {
    super();

    this.recipe = this.getRecipe();
  }

  getRecipe() {
    return {
      RecipeId: 0,
      RecipeName: "Lasagna",
      Description: "This is a very long and detailed description of how to make the above mentioned delicious food item.",
      Method: "This is a very long method description of how to combine this very specific combination of ingredients into a tasty food item.",
      Image: "public/images/lily-banse--YHSwy6uqvk-unsplash.jpg",
      Author: "Johann Schepers"
    }
  }

  render() {
    return html`
      <main>
        <header>
          <h1>Recipe: ${this.recipe.RecipeName}</h1>
        </header>
        
        <section>
          <h1></h1>
        </section>
        
      </main>
    `;
  }
}
customElements.define('recipe-view-page', RecipeView);


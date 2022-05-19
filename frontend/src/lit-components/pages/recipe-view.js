import { html, LitElement } from 'lit';
import { RecipeViewStyles } from '../../styles';
import { fetchApi } from '../../api/fetchApi';

export class RecipeView extends LitElement {
  static styles = RecipeViewStyles;
  
  static properties = {
    recipe: {}
  }

  constructor() {
    super();
    this.recipe = null;

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

  async getRecipe(recipeId) {
    console.log("RecipeId: " + recipeId);

    try {
      let res = await fetchApi({
        endpoint: `recipe/?id=${recipeId}`,
        method: 'GET',
      });

      if (res.status != 200) {
        alert("Server returned error code: " + res.status);
        return;
      }

      this.recipe = res.data;

      this.recipe.Method = this.split(this.recipe.Method);

      console.log(JSON.stringify(this.recipe));

    } catch (error){
      alert("Something bad went wrong: " + JSON.stringify(error));
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
            
          </header>

          <aside>
            <img src="${this.recipe.Image}" width="400px"/>
          </aside>
        </section>

        <section>
          <h1>Method:</h1>

          ${(!this.recipe.Method)? "" : this.recipe.Method.map(line => {
            return html`<p>${line}</p>`;
          })}
        </section>
        
      </main>
    `;
  }
}
customElements.define('recipe-view-page', RecipeView);


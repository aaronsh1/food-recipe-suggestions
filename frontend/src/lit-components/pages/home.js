import { html, LitElement } from 'lit';

import { HomeStyles } from '../../styles';

export class Home extends LitElement {
  static styles = HomeStyles;

  static properties = {

  }

  constructor() {
    super();
  }

  render() {
    return html`
      <main>
        <section class="main-components">
          <h1><img class="light-blue-logo" src="/public/images/light-blue-logo.svg" alt="logo">CookBook</h1>
          <p id="question">Having trouble coming up with different meals everyday?</p>
          <p id="view">View hundreds of recipes filtered by the ingredients in YOUR pantry!</p>
          <form>
            <input id="first-ingredient" type="button" value="Ingredient"/>
            <input type="button" value="Ingredient"/>
            <input type="button" value="Ingredient"/>
            <input type="button" value="Ingredient"/>
            <br>
            <input type="button" value="Ingredient"/>
            <input type="button" value="Ingredient"/>
            <input type="button" value="Ingredient"/>
            <input type="button" value="Ingredient"/>
            <input type="button" value="Ingredient"/>
          </form>
          <form class="search-form">
            <input type="search" placeholder="Search ingredients and recipes..."/>
            <button class="search-button"><img class="search-drumstick" src="/public/images/search-drumstick.svg" alt="search"></button>
          </form>
        </section>
        <section class="random-images">
          <img class="light-blue-logo" src="/public/images/light-blue-logo.svg" alt="logo">
          <img class="light-blue-logo" src="/public/images/light-blue-logo.svg" alt="logo">
          <img class="light-blue-logo" src="/public/images/light-blue-logo.svg" alt="logo">
          <img class="light-blue-logo" src="/public/images/light-blue-logo.svg" alt="logo">
          <img class="light-blue-logo" src="/public/images/light-blue-logo.svg" alt="logo">
        </section>
      </main>
    `;
  }
}
customElements.define('home-page', Home);
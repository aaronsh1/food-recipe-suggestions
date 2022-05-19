import { html, LitElement } from 'lit';
import queryString from 'query-string';

import { HomeStyles } from '../../styles';

export class Home extends LitElement {
  static styles = HomeStyles;

  static properties = {
    searchValues: [],
    chips: html
  }

  constructor() {
    super();

    this.searchValues = [];
    this.chips = html``;
  }

  addChips = (e) => {
    if(e.key === "Enter"){
      const searchValue = this.shadowRoot.getElementById('searchBar').value;
      console.log(searchValue);
      this.shadowRoot.getElementById('searchBar').value = null;
      this.searchValues.push(searchValue);
      console.log(this.searchValues);
      this.chips = html`
                ${this.chips}
                <input type="button" value=${searchValue}>
              `;


    }
  };

  searchRecipes = () => {
    const stringToSearch = queryString.stringify({search: this.searchValues}, {arrayFormat: 'bracket'});
    window.location.href = `/searchTemp?${stringToSearch}`;
  }

  render() {
    return html`
      <main>
        <section class="main-components">
          <h1><img class="light-blue-logo" src="/public/images/light-blue-logo.svg" alt="logo">CookBook</h1>
          <p id="question">Having trouble coming up with different meals everyday?</p>
          <p id="view">View hundreds of recipes filtered by the ingredients in YOUR pantry!</p>
          <section id="chips-section">${this.chips}</section>
          <section class="search-form" >
            <input id="searchBar" type="search" placeholder="Search ingredients and recipes..." @keypress="${this.addChips}"/>
            <button class="search-button" @click="${this.searchRecipes}"><img class="search-drumstick" src="/public/images/search-drumstick.svg" alt="search"></button>
          </section>
        </section>
        <section class="random-images">
          <img class="knife-fork" src="/public/images/knife-fork.svg" alt="knife-fork">
          <img class="burger" src="/public/images/burger.svg" alt="burger">
          <img class="pizza" src="/public/images/pizza.svg" alt="pizza">
          <img class="cake" src="/public/images/cake.svg" alt="cake">
          <img class="food-bowl" src="/public/images/food-bowl.svg" alt="food-bowl">
          <img class="carrot" src="/public/images/carrot.svg" alt="carrot">
          <img class="egg" src="/public/images/egg.svg" alt="egg">
          <img class="wine-glasses" src="/public/images/wine-glasses.svg" alt="wine-glasses">
          <img class="bread" src="/public/images/bread.svg" alt="bread">
        </section>
        <footer>
          <section>
            <h1><img class="dark-blue-logo" src="/public/images/dark-blue-logo.svg" alt="logo">CookBook</h1>
            <p class="bbd">BBD Graduate Program - Web development fundamentals</p>
            <p>Food suggestion site</p>
          </section>
          <ul>
            <li>aaronsh@bbd.co.za</li>
            <li>seang@bbd.co.za</li>
            <li>mikaylan@bbd.co.za</li>
            <li>sphelelon@bbd.co.za</li>
            <li>kiyolinp@bbd.co.za</li>
            <li>johanns@bbd.co.za</li>
          </ul>
        </footer>
      </main>
    `;
  }
}
customElements.define('home-page', Home);
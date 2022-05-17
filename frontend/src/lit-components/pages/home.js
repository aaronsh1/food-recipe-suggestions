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
      <p>Homepage works!</p>
    `;
  }
}
customElements.define('home-page', Home);
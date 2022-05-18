import { html, LitElement, css } from 'lit';
import { fetchApi } from '../api/fetchApi';

export class SignIn extends LitElement {
  static styles = css``;

  static properties = {
    test: { type: String }
  }

  constructor() {
    super();
    this.test = '';
  }

  buttonOnClick = () => {
    fetchApi().then((res) => {
      this.test = JSON.stringify(res);
    });
  }

  render() {
    return html`
      <button @click="${this.buttonOnClick}">
        Call API
      </button>
      <p>${this.test}</p>
    `;
  }
}
customElements.define('sign-in', SignIn);
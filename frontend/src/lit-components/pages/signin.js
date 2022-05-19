import { html, LitElement } from 'lit';
import { fetchApi } from '../../api/fetchApi';
import { SignInStyles } from '../../styles/signin';

export class SignIn extends LitElement {
  static styles = SignInStyles;

  static properties = {
    username: { type: String },
    password: { type: String },
  }

  constructor() {
    super();
    this.username = '';
    this.password = '';
  }

  buttonOnClick = () => {
    fetchApi({
      endpoint: 'login',
      data: {
        username: this.username,
        password: this.password,
      },
      method: 'POST',
    })
    .then(res => {

      if (res.status === 200) {
        window.localStorage.setItem('token', res.data.token);
        window.location.href = '/home';
      }
    });
  }

  render() {
    return html`
      <section class="signin-container">
        <h1>Login</h1>

        <input class="input" .value=${this.username} @change="${(e) => {this.username = e.target.value;}}"/>

        <input class="input" .value=${this.password} @change="${(e) => {this.password = e.target.value;}}"/>

        <button class="button" @click="${this.buttonOnClick}">
          Login
        </button>
      </section>
    `;
  }
}
customElements.define('sign-in', SignIn);
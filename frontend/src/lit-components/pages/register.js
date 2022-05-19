import { html, LitElement } from 'lit';
import { fetchApi } from '../../api/fetchApi';
import { RegisterStyles } from '../../styles/register';

export class Register extends LitElement {
  static styles = RegisterStyles;

  static properties = {
    username: { type: String },
    email: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
  }

  constructor() {
    super();
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  buttonOnClick = () => {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    fetchApi({
      endpoint: 'register',
      data: {
        username: this.username,
        email: this.email,
        password: this.password,
      },
      method: 'POST',
    })
    .then(res => {

      if (res.status === 200) {
        window.location.href = '/login';
      }
    });
  }

  render() {
    return html`
      <section class="register-container">
        <h1 class="header">Register</h1>

        <label class="label">Username</label>
        <input class="input" .value=${this.username} @change="${(e) => {this.username = e.target.value;}}"/>

        <label class="label">Email</label>
        <input class="input" .value=${this.email} @change="${(e) => {this.email = e.target.value;}}"/>

        <label class="label">Password</label>
        <input class="input" .value=${this.password} @change="${(e) => {this.password = e.target.value;}}"/>

        <label class="label">Confirm Password</label>
        <input class="input" .value=${this.confirmPassword} @change="${(e) => {this.confirmPassword = e.target.value;}}"/>

        <button class="button" @click="${this.buttonOnClick}">
          Login
        </button>
      </section>
    `;
  }
}
customElements.define('register-page', Register);
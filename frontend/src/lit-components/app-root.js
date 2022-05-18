import { html, LitElement, css } from 'lit';

export class AppRoot extends LitElement {
  static styles = css`
  .profile {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }`;

  static properties = {

  }

  constructor() {
    super();
  }

  //TODO: Global components (such as nav, etc.)
  render() {
    let route = window.location.href
      .replace(/http(s)?:\/\/.+?\//, '') //Remove hostname
      .replace(/\?.+/, '') //Remove query params

    if (route.endsWith('/')) {
      route = route.substring(0, route.length - 1);
    }

    switch (route) {
      case 'home': return html`
        <nav-bar></nav-bar>
        <home-page></home-page>
      `;
      case 'profile': return html`
      <nav-bar></nav-bar>
      <profile-page class='profile'></profile-page>
      `;

      default: window.location.href = '/home'; //Navigate to home when unknown route is passed
    }
  }
}
customElements.define('app-root', AppRoot);
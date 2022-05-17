import { html, LitElement, css } from 'lit';

export class AppRoot extends LitElement {
  static styles = css``;

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
        <home-page></home-page>
      `;
      case 'profile': return html`
      <profile-page></profile-page>
      `;

      default: window.location.href = '/home'; //Navigate to home when unknown route is passed
    }
  }
}
customElements.define('app-root', AppRoot);
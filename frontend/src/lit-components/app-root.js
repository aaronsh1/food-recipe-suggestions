import { html, LitElement, css } from 'lit';
import {AppRootStyles} from '../styles';
export class AppRoot extends LitElement {
  static styles = AppRootStyles

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

    let page;

    switch (route) {
      case 'home':
        page = html`<home-page></home-page>`;
        break;

        case 'profile':
        page = html`<profile-page class='profile'></profile-page>>`;
        break;

      default: window.location.href = '/home'; //Navigate to home when unknown route is passed
    }

    return html`
      <nav-bar></nav-bar>
      ${page}
    `;
  }
}
customElements.define('app-root', AppRoot);
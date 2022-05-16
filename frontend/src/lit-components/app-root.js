import { html, LitElement, css } from 'lit';

export class AppRoot extends LitElement {
  static styles = css``;

  static properties = {
    currentRoute: { type: String }
  }

  constructor() {
    super();
  }

  //TODO: Routing logic
  //TODO: Global components (such as nav, etc.)
  render() {
    switch (this.currentRoute) {
      default: return html`
        <home-page></home-page>
      `;
    }
  }
}
customElements.define('app-root', AppRoot);
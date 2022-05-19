import { html, LitElement, render } from 'lit';

import { SearchStyles } from '../../styles';

export class Search extends LitElement{
    static styles = SearchStyles;

    static properties = {
  
    }
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <p>search</p>
      `;
    }
    
}
customElements.define('search-page', Search);
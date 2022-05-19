import { html, LitElement } from 'lit';
import { temp } from '../../styles';
import queryString from 'query-string';

export class SearchTemp extends LitElement {
    static styles = temp;

    static properties = {

    }

    constructor() {
        super();
    }

    getQueryParams = () => {
        const urlParams = queryString.parseUrl(window.location.href)
        const searchValue = urlParams.query?.search;
        return searchValue
    }

    render() {
        return html`
            <p>${this.getQueryParams()}</p>
        `;
    }
}
customElements.define('search-temp', SearchTemp);
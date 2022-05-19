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
        const searchValue = urlParams.query.search;
        console.log(searchValue);
        console.log(urlParams.query);

        const queryStr = window.location.search;
        const parameters = new URLSearchParams(queryStr);
        const value = parameters.get('key');
        console.log(value);
        console.log(parameters)
        return searchValue;
    }

    render() {
        return html`
            <p>${this.getQueryParams()}</p>
        `;
    }
}
customElements.define('search-temp', SearchTemp);
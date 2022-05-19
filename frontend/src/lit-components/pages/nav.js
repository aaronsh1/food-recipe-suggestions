import { html, LitElement } from 'lit';

import { NavStyles } from '../../styles';

export class NavBar extends LitElement {
    static styles = NavStyles;

    static properties = {

    }

    constructor() {
        super();
    }

    render() {
        return html`
        <header>
            <a href="#" id="profile">
                <img src="/public/images/userprofile.svg" alt="profile">
            </a>
            <nav class="navbar">
                <ul class="navMenu">
                    <li><a href="/home" class="navItem">Home</a></li>
                    <li><a href="#" class="navItem">Search</a></li>
                    <li><a href="favourites" class="navItem">Favourites</a></li>
                    <li><a href="/profile" class="navItem">Profile</a></li>
                </ul>
            </nav>
            <a href="/register" id="signup"><button>Sign-up</button></a>
            <a href="/login"><button>Login</button></a>
            <img class="logo" src="/public/images/logo.svg" alt=""logo">
        </header>
        `;
    }
}
customElements.define('nav-bar', NavBar);
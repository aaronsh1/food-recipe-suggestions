import { html, LitElement } from 'lit';

import { NavSideStyles } from '../../styles';

export class NavSidebar extends LitElement {
    static styles = NavSideStyles;

    static properties = {

    }

    constructor() {
        super();
    }

    render() {
        return html`
        <header class="nav-side">
            <a href="/profile" id="profile">
                <img src="/public/images/userprofile.svg" alt="profile">
            </a>
            <nav class="navbar">
                <ul class="navMenu">
                    <li><a href="/home" class="navItem sidebar">Home</a></li>
                    <li><a href="/search" class="navItem sidebar">Search</a></li>
                    <li><a href="/favourites" class="navItem sidebar">Favourites</a></li>
                    <li><a href="/profile" class="navItem sidebar">Profile</a></li>
                    <li><a href="/recipes/" class="navItem sidebar">Recipes</a></li>
                    <li><a href="/register" id="signup" class="sidebar">Sign-up</a></li>
                    <li><a href="/login" class="sidebar">Login</a></li>
                    <li><a href="/home" class="sidebar"><img class="logo" src="/public/images/logo.svg" alt="logo"></a></li>
            </nav>
        </header>
        `;
    }
}
customElements.define('nav-sidebar', NavSidebar);
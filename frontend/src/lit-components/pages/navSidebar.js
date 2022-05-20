import { html, LitElement } from 'lit';

import { NavSideStyles } from '../../styles';

export class NavSidebar extends LitElement {
    static styles = NavSideStyles;

    static properties = {

    }

    constructor() {
        super();
    }

    handleLogout() {
        window.localStorage.removeItem('token');
        window.location.href = "/login"
    }

    render() {
        return html`
        <header class="nav-side">
            <a href=${(!window.localStorage.getItem("token"))? "/login" :"/profile"} id="profile">
                <img src="/public/images/userprofile.svg" alt="profile">
            </a>
            <nav class="navbar">
                <ul class="navMenu">
                    <li><a href="/home" class="navItem sidebar">Home</a></li>
                    <li><a href="/favourites" class="navItem sidebar">Favourites</a></li>
                    <li><a href="/recipes/" class="navItem sidebar">Recipes</a></li>
                    ${(!window.localStorage.getItem("token"))? 
                        html`<li><a href="/register" id="signup" class="navItem sidebar"><button>Sign-up</button></a></li>
                                <li><a href="/login" class="navItem sidebar"><button>Login</button></a></li>` : 
                        html`
                            <li><a href="/pantry/" class="navItem sidebar">My Pantry</a></li>
                            <li><a @click="${() => this.handleLogout()}" class="navItem sidebar">Logout</a></li>
                            `
                    }
                    <li><a href="/home" class="sidebar"><img class="logo" src="/public/images/logo.svg" alt="logo"></a></li>
            </nav>
        </header>
        `;
    }
}
customElements.define('nav-sidebar', NavSidebar);
import { html, css, LitElement } from 'lit';

import { NavStyles } from '../../styles';

export class NavBar extends LitElement {
    static styles = NavStyles;

    static properties = {

    }

    constructor() {
        super();
    }

    displayBurgerMenu = () => {
        console.log("adding");
        console.log(this);
        this.shadowRoot.querySelector("#this-navbar").innerHTML += "<nav-sidebar></nav-sidebar>";
        // navSide = thisNav.createElement("nav-sidebar");
        console.log("added");
    }
      
    handleLogout() {
        window.localStorage.removeItem('token');
        window.location.href = "/login"
    }

    render() {
        return html`
        <header id="this-navbar">
            <a href="/profile" id="profile">
                <img src="/public/images/userprofile.svg" alt="profile">
            </a>
            <nav class="navbar">
                <ul class="navMenu">
                    <li><a href="/home" class="navItem hide">Home</a></li>
                    <li><a href="/search" class="navItem hide">Search</a></li>
                    <li><a href="/favourites" class="navItem hide">Favourites</a></li>
                    <li><a href="/profile" class="navItem hide">Profile</a></li>
                    <li><a href="/recipes" class="navItem hide">Recipes</a></li>
                </ul>
                <a href="/register" id="signup" class="hide"><button>Sign-up</button></a>
                <a href="/login" class="hide"><button>Login</button></a>
                <a href="/home" class="hide"><img class="logo" src="/public/images/logo.svg" alt="logo"></a>
                <img src="/public/images/burger-solid.svg" class="burger" @click=${this.displayBurgerMenu}/>
            </nav>

            ${(!window.localStorage.getItem("token"))? 
                html`<a href="/register" id="signup"><button>Sign-up</button></a><a href="/login"><button>Login</button></a>` : 
                html`<button @click="${() => this.handleLogout()}">Logout</button>`
            }
            
            <a href="/home"><img class="logo" src="/public/images/logo.svg" alt="logo"></a>
        </header>
        `;
    }
}
customElements.define('nav-bar', NavBar);
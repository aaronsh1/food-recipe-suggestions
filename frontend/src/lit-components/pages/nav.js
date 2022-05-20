import { html, css, LitElement } from 'lit';

import { NavStyles } from '../../styles';

export class NavBar extends LitElement {
    static styles = NavStyles;
    oldDom = "";

    static properties = {

    }

    constructor() {
        super();
    }

    navSidebarBeGone = () => {
        document.querySelector("#screen-film").remove();
        this.shadowRoot.querySelector("#this-navbar").innerHTML = this.oldDom;
        this.shadowRoot.querySelector(".burger").onclick = this.displayBurgerMenu;
    }

    displayBurgerMenu = () => {
        console.log("adding");
        console.log(this);
        let screenFilm = document.createElement("section");
        screenFilm.style = css `
            filter: blur(4);
            transition: 0.5s;
            position: fixed;
            z-index: 1;
            width: 100%;
            top: 0;
            left: 0;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        `
        screenFilm.setAttribute("id", "screen-film");
        screenFilm.onclick = this.navSidebarBeGone;
        document.body.appendChild(screenFilm);
        this.oldDom = this.shadowRoot.querySelector("#this-navbar").innerHTML;
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
            <a href=${(!window.localStorage.getItem("token"))? "/login" :"/profile"} class="navbar-pic" id="profile">
                <img src="/public/images/userprofile.svg" alt="profile">
            </a>

            <img src="/public/images/burger-solid.svg" class="burger navbar-pic" @click=${this.displayBurgerMenu}/>

            <nav class="navbar">
                <ul class="navMenu">
                    <li><a href="/home" class="navItem hide">Home</a></li>
                    <li><a href="/favourites" class="navItem hide">Favourites</a></li>
                    <li><a href="/recipes/" class="navItem hide">Recipes</a></li>
                    <li><a href="/pantry/" class="navItem hide">My Pantry</a></li>
                </ul>
                
            </nav>

            ${(!window.localStorage.getItem("token"))? 
                html`<a href="/register" id="signup" class="hide"><button>Sign-up</button></a>
                        <a href="/login" class="hide"><button>Login</button></a>` : 
                html`<button class="hide" @click="${() => this.handleLogout()}">Logout</button>`
            }
            
            <a href="/home" class="hide"><img class="logo" src="/public/images/logo.svg" alt="logo"></a>
        </header>
        `;
    }
}
customElements.define('nav-bar', NavBar);
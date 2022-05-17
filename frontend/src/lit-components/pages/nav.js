import { html, LitElement } from 'lit';

import { NavStyles } from '../../styles';

export class NavBar extends LitElement {
    static styles = NavStyles;

    static properties = {

    }

    constructor() {
        super();
    }

                // <img class="profileImage" src="../../../public/images/Group 44.jpg" alt="profile">
    render() {
        return html`
        <header>
            <nav class="navbar">
                <ul class="navMenu"">
                    <li><a href="#" class="navItem"><img src="../../../public/images/userprofile.jpg" alt="profile"></a></li>
                    <li><a href="#" class="navItem">Search</a></li>
                    <li><a href="#" class="navItem">Favourites</a></li>
                </ul>
            </nav>
            <a href="#" id="signup"><button>Sign-up</button></a>
            <a href="#"><button>Login</button></a>
            <img src="../../../public/images/logo.jpg" alt="logo" id="logo">
        </header>
        `;
    }
}
customElements.define('nav-bar', NavBar);
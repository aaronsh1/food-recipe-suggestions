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
                <svg width="60" height="60" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="20.5" cy="20" rx="20.5" ry="20" fill="#2A9D8F"/>
                    <path d="M20.5 19.0008C24.4453 19.0008 27.6429 16.0903 27.6429 12.5004C27.6429 8.91044 24.4453 6 20.5 6C16.5547 6 13.3571 8.91044 13.3571 12.5004C13.3571 16.0903 16.5547 19.0008 20.5 19.0008ZM23.3292 21.4384H17.6708C12.3309 21.4384 8 25.3793 8 30.2393C8 31.2113 8.86607 32 9.93415 32H31.067C32.135 32.0015 33 31.2144 33 30.2393C33 25.3793 28.6696 21.4384 23.3292 21.4384Z" fill="#264653"/>
                </svg>
            </a>
            <nav class="navbar">
                <ul class="navMenu">
                    <li><a href="#" class="navItem">Search</a></li>
                    <li><a href="#" class="navItem">Favourites</a></li>
                    <li><a href="/profile" class="navItem">Profile</a></li>
                </ul>
            </nav>
            <a href="#" id="signup"><button>Sign-up</button></a>
            <a href="#"><button>Login</button></a>
            <svg class="logo" width="60" height="60" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5835 2.03097L15.5835 2.03098L15.5878 2.02896C17.2705 1.24073 19.1658 0.899435 21.0669 1.02556C21.5996 6.39641 26.3053 10.5482 32.044 10.9661C32.5501 16.3424 37.2457 20.5036 42.979 20.9528C43.0957 22.5955 42.7258 24.2549 41.8904 25.7403L41.8899 25.7412L38.8714 31.122L38.8703 31.1239C37.8953 32.8712 36.3193 34.3113 34.3617 35.2149L34.3602 35.2156L28.4211 37.9689C28.4206 37.9691 28.42 37.9694 28.4195 37.9696C26.4594 38.8734 24.2379 39.1974 22.0535 38.883L22.0534 38.883L15.4683 37.9355C13.2832 37.621 11.2982 36.6953 9.75418 35.2886L9.7536 35.2881L5.04569 31.0056L5.04548 31.0055C3.50359 29.6037 2.50303 27.8087 2.16711 25.8805L2.16699 25.8798L1.12503 19.9248C1.12498 19.9245 1.12493 19.9242 1.12488 19.9239C0.789391 17.9871 1.13308 16.0134 2.11833 14.2565L2.11879 14.2556L5.12504 8.88299C5.12525 8.88262 5.12546 8.88226 5.12567 8.88189C6.11223 7.12998 7.68961 5.68825 9.65091 4.7755C9.65125 4.77534 9.6516 4.77517 9.65195 4.77501L15.5835 2.03097ZM10.7326 26.6671C10.7326 28.7187 12.6098 30.2588 14.6658 30.2588C16.7197 30.2588 18.5991 28.7191 18.5991 26.6671C18.5991 24.6156 16.7219 23.0755 14.6658 23.0755C12.6098 23.0755 10.7326 24.6156 10.7326 26.6671ZM13.6658 13.409C13.6658 15.4606 15.543 17.0006 17.5991 17.0006C19.6529 17.0006 21.5324 15.461 21.5324 13.409C21.5324 11.3575 19.6552 9.81739 17.5991 9.81739C15.543 9.81739 13.6658 11.3575 13.6658 13.409ZM28.3322 24.0005C28.3322 26.0521 30.2094 27.5921 32.2655 27.5921C34.3193 27.5921 36.1988 26.0525 36.1988 24.0005C36.1988 21.949 34.3216 20.4089 32.2655 20.4089C30.2094 20.4089 28.3322 21.949 28.3322 24.0005Z" fill="#F4A261" stroke="#E76F51" stroke-width="2"/>
            </svg>
        </header>
        `;
    }
}
customElements.define('nav-bar', NavBar);
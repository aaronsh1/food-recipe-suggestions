import { css } from 'lit';

export const NavSideStyles = css`
    .nav-side {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    .navbar {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .navMenu { 
        list-style-type: none;
        margin: auto 3%;
        padding: 3%;
    }

    #profile {
        margin: 3% auto;
    }

    .navItem {
        text-decoration: none;
        margin: 3%;
    }

    .navMenu > li {
        margin: 25% 3%;
    }
`
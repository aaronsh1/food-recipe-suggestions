import { css } from 'lit';

export const NavStyles = css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background-color: #F4A261;
    }

    li, a {
        font-weight: 500;
        font-size: 20px;
        color: #264653;
        text-decoration: none;
    }

    header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 30px 2.5%;
    }

    .navbar {
        display: flex;
    }

    .navMenu {
        list-style: none;
    }

    .navMenu li {
        display: inline-block;
        padding: 0px 20px;
    }

    .navMenu li a {
        transition: all o.3s ease 0s;
    }

    .navMenu li a:hover {
        color: #2A9D8F;
    }

    button {
        font-weight: 250;
        font-size: 16px;
        color: #FFFFFF;
        text-decoration: none;
        margin-left: 20px;
        padding: 9px 25px;
        background-color: rgba(231,111,81,1);
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all o.3s ease 0s;
    }

    button:hover {
        background-color: rgba(231,111,81,0.5);
    }

    #signup {
        margin-left: auto;
    }
    
    #profile {
        margin-right: 10px;
    }

    .logo {
        margin-left: 20px;
    }

    .burger {
        display: none;
    }

    @media only screen and (max-width: 600px) {
        .hide{
            display: none;
        }

        body{
            position: fixed;
        }

        .burger {
            display: block;
            width: 20%;
        }

        nav-sidebar {
            position: fixed;
            top: 0;
            height: 100vh;
            z-index: 3;
            background-color: #FF7C0A;
            right: 0px;
            width: 60%;
        }
    }

    @media only screen and (min-width: 600px) {
        nav-sidebar {
            display: none;
        }
    }
`;
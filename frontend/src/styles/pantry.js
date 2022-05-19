import { css } from 'lit';

export const PantryStyles = css`
#ingredient-pantry {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0.3rem;
    width: 70%;
    margin: auto;
}

* {
    text-align: center;
}

pantry-a {
    background-color: black;
}

pantry-ingredient {
    width: 10em;
    filter: grayscale(60%);
    transition: 0.5s;
    padding: 5% 3%;
}

pantry-ingredient:hover {
    filter:grayscale(0);
    transition: 0.5s;
    width: 12em;
}

body {
    text-align: center;
    background-color: #FFF1D0;
    transition: 0.5s;
}

.pantry-subheading {
    font-size: medium;
}

#add-ingredient-fab {
    margin: auto;
    padding: 1.5em;
    color: white;
    border-radius: 100%;
    background-color: #E76F51;
    border: none;
    font-size: large;
    position: fixed;
    float: right;
    z-index: 1;
    right: 10%;
    top: 50%;
    box-shadow: grey 0.4em 0.4em 1em;
    transition: 0.3s;
}

#add-ingredient-fab:hover {
    background-color: #EE9781;
    transition: 0.3s;
}

#add-ingredient-fab:active {
    background-color: #E45C3A;
}

.blur {
    filter: blur(4px);
    transition: 0.5s;
}
`
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

#search-button {
    width: 10%;
    height: 10%;
    padding: 1.25% 1%;
    border-radius: 1em;
    border: none;
    margin: auto;
    background-color: #E76F51;
    box-shadow: grey 0.4em 0.4em 1em;
    transition: 0.3s;
    color: white;
    margin-left: 1%;
}

#search-bar {
    display: flex;
    justify-content: space-around;
    padding: 0 15%;
}
.scoreboard {
    padding: 1%;
    background: #2A9D8F;
    border-radius: 1em;
    box-shadow: grey 0.5em 0.5em 0.5em;
    color: white;
    margin: auto;
    margin-right: 1%;
    font-size: small;
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

@media only screen and (max-width: 600px) {
    #search-bar {
        flex-direction: column;
        justify-content: space-around;
        margin: auto;
    }

    .scoreboard {
        margin: auto;
        padding: 3%;
    }

    #search-button{
        margin: auto;
        width: fit-content;
        padding: 3%;
        margin-top: 3%;
    }
}

`
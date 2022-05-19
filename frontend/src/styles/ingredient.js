import { css } from 'lit';

export const IngredientStyles = css `
    .ingredient-block {
        height: 80%;
        border: none;
        border-radius: 15px;
        background-color: #E9C46A;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 3%;
        box-shadow: #c18800 0.6em 0.6em 0.5em;
        padding: 10% 0;
    }
    .ingredient-pic {
        width: 40%;
        margin: auto;
    }

    .delete-ingredient {
        width: 20%;
        margin: 5%;
        position: relative;
        float: left;
        border: none;
        background: none;
    }
    .ingredient-name {
        margin: auto 0;
        width: 100%;
        text-align: center;
        background-color: #FFECBD;
        padding: 3% 0;
    }
`
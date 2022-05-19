import { css } from 'lit';

export const RecipesStyles= css`

    main {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    
    .recipeCard {
        width: 70%;
    }

    .pageHead {
        width: 70%;
        vertical-align: center;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    .pageHead h1 {
        margin: 0;
        margin-left: 20px;
    }

    .pageHead button {
        font-weight: 250;
        font-size: 16px;
        color: #FFFFFF;
        text-decoration: none;
        margin-right: 20px;
        padding: 9px 25px;
        background-color: rgba(231,111,81,1);
        border: none;
        border-radius: 50px;
        cursor: pointer;
        float: right;
        transition: all o.3s ease 0s;
    }

    button:hover {
        background-color: rgba(231,111,81,0.5);
    }
`;
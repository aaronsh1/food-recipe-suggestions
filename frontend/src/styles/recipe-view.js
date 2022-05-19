import { css } from 'lit';

export const RecipeViewStyles= css`

    main {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    
    section {
        width: 70%;
        padding: 15px;
        margin: 20px;
        margin-bottom: 0px;
        border-radius: 5px;
        border-color: #E9C46A;
        border-width: 1px;
        border-style: solid;
        background-color: white;
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    section h1 {
        margin-top: 0px;
    }

    input[type=button] {
        color: #264653;
        width: 100px;
        background: rgba(34, 170, 153, 0.43);
        border: 1px solid #2A9D8F;
        border-radius: 30px;
        padding: 5px 8px;
        margin: 7px 8px;
    }
`;
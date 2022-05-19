import { css } from 'lit';

export const DeleteModalStyles = css`
    #delete-ingredient-modal {
        position: fixed;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        margin: auto;
        width: 40%;
        height: auto;
        text-align: center;
    }

    #delete-ingredient-modal {
        width: 50%;
        background-color: #F4A261;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 3em;
    }

    .del-ingr-modal-title {
        background-color: #E76F51;
        padding: 3% 0;
        width: 100%;
        border-radius: 5em 5em 0 0;
    }

    .delete-button {
        border: none;
        border-radius: 5em;
        background-color: rgb(6, 108, 96);
        color: rgb(244, 162, 97);
        text-align: center;
        margin: 2% auto;
        padding: 3%;
    }
`
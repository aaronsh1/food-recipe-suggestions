import { css } from 'lit';

export const ModalStyles = css `
    #add-ingredient-modal {
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

    .add-ingr-modal-title {
        background-color: #E76F51;
        padding: 3% 0;
        width: 100%;
        border-radius: 5em 5em 0 0;
    }

    .add-ingredient-form {
        width: 100%;
        background-color: #F4A261;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 0 0 5em 5em;
    }

    .add-modal-form-element {
        padding: 3%;
        margin: 3% auto;
    }

    #modal-dropdown {
        width: 50%;
        padding: 1%;
        border: none;
    }

    #add-ingredient-submit {
        height: 0.5em;
        border: none;
        border-radius: 5em;
        background-color: rgb(6, 108, 96);
        color: rgb(244, 162, 97);
        text-align: center;
    }

    .ingredient-option {
        width: 50%;
    }
`
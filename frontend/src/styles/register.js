import { css } from 'lit';

const maxWidth = css`
  max-width: 350px
`;

export const RegisterStyles = css`
  .register-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header {
    width: 100%;
    ${maxWidth};
    flex-grow: 1;
    justify-content: left;
    text-align: left;
    box-sizing: border-box;
  }

  .input {
    width: 100%;
    ${maxWidth};
    padding: 15px;
    border-radius: 10px;
    border: 1px solid black;
    box-sizing: border-box;
    margin: 10px;
  }

  .label {
    width: 100%;
    ${maxWidth};
    flex-grow: 1;
    justify-content: left;
    box-sizing: border-box;
    text-align: left;
  }

  .button {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    ${maxWidth};
    border: none;
    box-sizing: border-box;
    background-color: rgb(244, 162, 97);
    margin: 10px;
  }
`;
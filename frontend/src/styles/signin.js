import { css } from 'lit';

export const SignInStyles = css`
  .signin-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input {
    width: 100%;
    max-width: 250px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid black;
    margin: 10px;
  }

  .button {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    max-width: 250px;
    border: none;
    background-color: rgb(244, 162, 97);
    margin: 10px;
  }
`;
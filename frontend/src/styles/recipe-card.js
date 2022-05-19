import { css } from 'lit';

export const RecipeCardStyles = css`

  article {
    display: flex;
    flex-direction: row;
    padding: 15px;
    margin: 20px;
    margin-bottom: 0px;
    border-radius: 5px;
    border-color: #E9C46A;
    border-width: 1px;
    border-style: solid;
    background-color: white;
    cursor: pointer;
  }

  aside {
    margin-right: 30px;
  }

  section p {
    height: 150px;
    overflow-y: auto;
  }

  .visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 2s linear;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 1s linear;
  }
`;
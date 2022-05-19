import { css } from 'lit';

export const RecipeCardStyles = css`



  .recipe-image {
    width: 300px;
    height: 300px;
    border-radius: 5px;
  }

  .recipe-container {
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    background-color: #F4A261;
    width: 300px;
    
  }

  .recipe-container h4 {
    margin: 10px 0px;
  }

  .recipe-container p {
    font-size: smaller;
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
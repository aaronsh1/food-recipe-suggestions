import { css } from 'lit';

export const FavouritesStyles = css`
  .favourites-container {
    width: -webkit-fill-available;
    background-color: rgba(233, 196, 106, 0.5);
    font-size: larger;
    color: rgb(38, 70, 83);
  }

  .recipes-container {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;

  }

  header {
    display: flex;
    justify-content: center;
    color: #264653;
  }

  .recipe-image {
    width: 200px;
    height: 200px;
    border-radius: 5px;
  }

  .recipe-container {
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    background-color: #F4A261;
    width: 200px;
    
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
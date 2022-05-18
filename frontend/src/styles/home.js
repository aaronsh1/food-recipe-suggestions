import { css } from 'lit';

export const HomeStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

  * {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    position: relative;
    background: rgba(233, 196, 106, 0.22);
  }

  .main-components {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 2.5%;
    position: absolute;
  }

  .main-components h1 {
    font-size: 60px;
    color: #2A9D8F;
    -webkit-text-stroke: 2px #264653;
  }

  .light-blue-logo {
    width: 55px;
    height: 55px;
    margin-right: 8px;
  }

  #question {
    font-size: 38px;
    color: #E76F51;
    margin-top: 60px;
  }

  #view {
    font-size: 26px;
    color: #F4A261;
    margin-top: 5px;
    margin-bottom: 50px;
  }

  #first-ingredient {
    margin-left: 65px;
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

  .search-form {
    display: flex;
    flex-direction: row;
    background: rgba(255, 255, 255, 0.61);
    border: 1px solid #E9C46A;
    border-radius: 30px;
    width: 700px;
    height: 35px;
    padding: 6px;
    margin-top: 10px;
  }
  
  input[type=search] {
    flex-grow: 2;
    border: none;
    background: rgba(255, 255, 255, 0.61);
    padding: 3px 15px;
    font-size: 16px;
  }
  
  input[type=search]:focus {
    outline: none;
  }
  
  .search-button {
    border: none;
    padding: 1px 5px;
    background: rgba(255, 255, 255, 0.61);
  }

  .search-drumstick{
    height: 20px;
  }

  .random-images {
    z-index: 9;
  }
`;
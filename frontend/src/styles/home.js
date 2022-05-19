import { css } from 'lit';

export const HomeStyles = css`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    position: relative;
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
    height: 660px;
  }

  .random-images img {
    padding: 10px 10px;
  }

  .knife-fork{
    position: absolute;
    top: 50px;
    left: 200px;
  }

  .burger{
    position: absolute;
    top: 300px;
    left: 80px;
    height: 80px;
  }

  .pizza{
    position: absolute;
    top: 450px;
    left: 220px;
    height: 80px;
  }

  .cake{
    position: absolute;
    top: 550px;
    left: 450px;
    height: 80px;
  }

  .food-bowl{
    position: absolute;
    top: 500px;
    left: 900px;
    height: 70px;
  }

  .carrot{
    position: absolute;
    top: 550px;
    right: 350px;
    height: 90px;
  }

  .egg{
    position: absolute;
    top: 420px;
    right: 180px;
    height: 65px;
  }

  .wine-glasses{
    position: absolute;
    top: 200px;
    right: 100px;
    height: 80px;
  }

  .bread{
    position: absolute;
    top: 40px;
    right: 200px;
    height: 80px;
  }

  footer {
    display: flex;
    justify-content: space-between;
    background: #264653;
    height: 152px;
    padding: 15px 30px;
  }

  footer h1 {
    font-size: 40px;
    color: #264653;
    -webkit-text-stroke: 1.5px #2A9D8F;
  }

  footer h1 img {
    margin-right: 10px;
    height: 40px;
  }

  footer section p {
    color: #C3E1DE;
  }
  .bbd {
    margin-top: 30px;
  }

  ul {
    margin-top: 10px;
    list-style: none;
    color: #C3E1DE;
  }
`;
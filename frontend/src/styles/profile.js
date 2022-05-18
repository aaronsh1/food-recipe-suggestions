import { css } from 'lit';

export const ProfileStyles = css`
.input-style {
    width: 200px;
    padding: 5px;
    font-size: medium;
}

h2 {
    top: 260px;
    font-size: 55px;
    position: absolute;
    color: #264653;
}

.profile-image {
    position: absolute;
    height: 150px;
    top: 150px;
    clip-path: circle(65px at 50% 50%);
}

@media (min-width: 768px) {

    .input-style {
        width: 350px;
        padding: 10px;
        font-size: large;
    }
  }
 
  @media (min-width: 1100px) {
    h2 {
        font-size: 70px;
        top: 200px;

    }

    .profile-image {
        position: absolute;
        height: 220px;
        left: 30px;
        top: 150px;
        clip-path: circle(100px at 50% 50%);
    }
  }
 
  @media (min-width: 1200px) {}




.profile-container {
    width: -webkit-fill-available;
    background-color: rgba(233, 196, 106,0.5);
    font-size: larger;
}

.banner-image {
    width: -webkit-fill-available;
    background-color: rgba(233, 196, 106,0.5);
    opacity: 0.7;
    height: 250px;
}

.input-style {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 5px;
}

.form-style {
    padding: 30px 50px;
    width: -webkit-fill-available;
    position: relative;
}

.text-button {
    color: #1a73e8;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: 30px 0px;
    font-size: medium;
}

.show {
    display: flex;
}

.hide {
    display: none;
}



.button-general {
    font-weight: 250;
    font-size: 16px;
    color: #FFFFFF;
    text-decoration: none;
    margin-left: 20px;
    padding: 9px 25px;
    background-color: rgba(231,111,81,1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all o.3s ease 0s;
}


.button-general:hover {
    background-color: rgba(231,111,81,0.5);
}

.discard-button {
    color: #264653;
}

.apply-button {
    float: right;
    color: white;
}

fieldset {
    border-width: 0px;
}
  
`;
import { css } from 'lit';

export const ProfileStyles = css`

.profile-container {
    display: flex;
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
    width: 350px;
    padding: 10px;
    font-size: large;
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
    padding: 10px 0px;
    font-size: medium;
}

.show {
    display: flex;
}

.hide {
    display: none;
}

.button-general {
    border-radius: 40px;
    border: none;
    background-color: #E76F51;
    padding: 10px;
    color: #264653;
    cursor: pointer;
    font-size: medium;

}
.discard-button {
    color: #264653;
    position: absolute;
    bottom: 30px;
}

.apply-button {
    float: right;
    color: white;
}

fieldset {
    border-width: 0px;
}
  
`;
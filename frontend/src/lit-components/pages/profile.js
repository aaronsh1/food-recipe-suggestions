import { html, LitElement } from 'lit';

import { fetchApi } from '../../api/fetchApi';

import {ProfileStyles } from '../../styles';
export class Profile extends LitElement {
  static styles = ProfileStyles;
 

  static get properties() {
    return {
      showPasswordChangeInputs: {type:Boolean},
      collapseBanner: {type:Boolean},
      profile: {},
      user: {},
    };
  }


  constructor() {
    super();
    this.testString = 'username';



    this.user = undefined; 

    fetchApi({
      endpoint: 'profile',
      method: 'GET',
      token: window.localStorage.getItem('token'),
    })
    .then(res => {
      if (res.status === 200) {
        this.user = res.data;
      }
    })
    .catch();
    this.showPasswordChangeInputs = false
    this.collapseBanner = false;
  }





  render() {
    return html`

        <img class='${this.collapseBanner ? 'banner-image collapse' : 'banner-image'}'  src='/public/images/banner-profile.png' alt='Banner Image'>
        <img class='${this.collapseBanner ? 'profile-image hidden' : 'profile-image visible'}'  src='/public/images/profile-picture-default.jpg' alt='Profile picture'>
        <h2 class='${this.collapseBanner ? 'collapse-heading' : ''}'>Your Profile Details</h2>

    <section class='profile-container'>
    
        <form class='form-style'>
                
         
            ${this.user ? html` 

            <label>Username</label><br>
            <input class='input-style' type='text' .value="${this.user.Username}"><br><br>
            <label>Email</label><br>
            <input class='input-style' type='email'><br><br>
            
            ` : ''}



            <button class='text-button' class='${!this.showPasswordChangeInputs ? 'text-button' : 'hide'}' @click="${this._changePasswordClick}" type='button'>Change password?</button><br>


            <fieldset class='${this.showPasswordChangeInputs ? '' : 'hide'}'>                    
                <label>Current Password</label><br>
                <input class='input-style' type='password'><br><br>

                <label >New Password</label><br>
                <input class='input-style' type='password'><br><br>

                <label >Confirm New Password</label><br>
                <input class='input-style' type='password'>  <br><br>       
            </fieldset>

            <button class='button-general discard-button' @click="${this._discard}" type='button'>Discard Changes</button>

            <button class='button-general apply-button' @click="${this._apply}" type='button'>Apply Changes</button><br>

        </form>


    </section>
    `;
  }

  _changePasswordClick(e) {
    console.log(this.showPasswordChangeInputs);
    this.showPasswordChangeInputs = true;
    this.collapseBanner = true;
}



_discard(e) {
    this.showPasswordChangeInputs = false;
    this.collapseBanner = false;
}

_apply(e) {

}
}
customElements.define('profile-page', Profile);


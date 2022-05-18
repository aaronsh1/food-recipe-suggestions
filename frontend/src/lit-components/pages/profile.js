import { html, LitElement } from 'lit';

import {ProfileStyles } from '../../styles';
import banner from '../../../public/images/banner-profile.png';
import profile_picture_default from '../../../public/images/profile-picture-default.jpg';

export class Profile extends LitElement {
  static styles = ProfileStyles;
 

  static get properties() {
    return {
      showPasswordChangeInputs: {type:Boolean}
    };
  }


  constructor() {
    super();
    this.showPasswordChangeInputs = false
  }



  render() {
    return html`
<img class='banner-image' src=${banner} alt='Banner Image'>
<img class='profile-image' src=${profile_picture_default} alt='Profile picture'>
<h2>Your Profile Details</h2>
    <section class='profile-container'>
    
        <form class='form-style'>
                
            <label>Username</label><br>
            <input class='input-style' type='text'><br><br>

            <label>Email</label><br>
            <input class='input-style' type='email'><br><br>

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
}

_discard(e) {
    this.showPasswordChangeInputs = false;
}

_apply(e) {

}
}
customElements.define('profile-page', Profile);


import { html, LitElement } from 'lit';
import {ref} from 'lit/directives/ref.js';

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



    this.user = {}; 

    // this.user = {    
    //   UserId: 1,
    //   Username: this.testString,
    //   Password: 'something',
    //   Salt: 'salt',
    //   Email: 'something@gmail.com',
    // };

    //this.formUsername = this.user.Username;

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
               
         
    ${this.user ? html` 
        <form class='form-style'>
     
        <fieldset class='${!this.showPasswordChangeInputs ? '' : 'hide'}'> 
            <label>Username</label><br>
            <input id='username' class='input-style' type='text' value="${this.user?.Username}" readonly><br><br>
            <label>Email</label><br>
            <input id='email' class='input-style' type='email' value="${this.user?.Email}" readonly><br><br>
     
            </fieldset>


            <button class='text-button' class='${!this.showPasswordChangeInputs ? 'text-button' : 'hide'}' @click="${this._changePasswordClick}" type='button'>Change password?</button><br>


            <fieldset class='${this.showPasswordChangeInputs ? '' : 'hide'}'>                    
                <label>Current Password</label><br>
                <input id='currentPass' readclass='input-style' type='password' ><br><br>

                <label >New Password</label><br>
                <input id='newPass' class='input-style' type='password'><br><br>

                <label >Confirm New Password</label><br>
                <input id='confirmPass' class='input-style' type='password'>  <br><br>       
            </fieldset>

            <button class='button-general discard-button' @click="${this._discard}" type='button'>Discard Changes</button>

            <button class='button-general apply-button' @click="${this._apply}" type='button'>Apply Changes</button><br>

        </form>

               
        ` : ''}


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
    this.shadowRoot.getElementById("username").value = '';
    this.shadowRoot.getElementById("email").value = '';
  
    this.shadowRoot.getElementById("currentPass").value = '';
    this.shadowRoot.getElementById("newPass").value = '';
    this.shadowRoot.getElementById("confirmPass").value = '';
}

_apply(e) {

  if(this.showPasswordChangeInputs)
  {
    var formCurrentPass = this.shadowRoot.getElementById("currentPass").value;
    var formNewPass = this.shadowRoot.getElementById("newPass").value;
    var formConfirmPass= this.shadowRoot.getElementById("confirmPass").value;


    if (formNewPass === formConfirmPass)
    {
      fetchApi({
        endpoint: 'profile',
        data: {
          newPassword: formNewPass,
           currentPassword: formCurrentPass,
        },
        token: window.localStorage.getItem("token"),
        method: 'PUT',
      })
      .then(res => {
        alert('Password changed');
      });

    }


  }
  else
  {
    var formUsername = this.shadowRoot.getElementById("username").value;
    var formEmail= this.shadowRoot.getElementById("email").value;
    if (formEmail !== this.user.Email)
    {
      this.changeEmail(formEmail);
    }
  
  }

console.log(formUsername);
console.log(this.user.Username);

  //const hashPassword = crypto.createHash('sha256').update(password + data.Salt).digest("hex")
  
}




changeEmail(email) {
  fetchApi({
    endpoint: 'profile/setEmail',
    data: {
      Username: this.user.UserId,
      Email: email ,
    },
    method: 'PUT',
  })
  .then(res => {

    if (res.status === 200) {
    }
  });
}
}
customElements.define('profile-page', Profile);


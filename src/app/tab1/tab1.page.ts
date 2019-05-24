import { Component } from '@angular/core';
// Init Capacitor
import { Plugins } from '@capacitor/core';
// import { registerWebPlugin, Plugins } from '@capacitor/core';
// import { FacebookLogin } from '@rdlabo/capacitor-facebook-login';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  doFacebookLogin(): void {
    const FACEBOOK_PERMISSIONS = ['email', 'public_profile'];

    Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS }).then(res => {
      if (res.accessToken) {
        // Login successful.
        console.log(`Facebook access token is ${res.accessToken.token}`);
      } else {
        console.log("Cancelled by user");
        // Cancelled by user.
      }
    })
  }
}

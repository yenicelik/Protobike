import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Externally installed apps
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    userProfile: any = null;
    constructor(public navCtrl: NavController, private facebook: Facebook) {

    }

    facebookLogin(): void {
        this.facebook.login(['email']).then( (response) => {
            const facebookCredential = firebase.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);

            firebase.auth().signInWithCredential(facebookCredential)
                .then((success) => {
                    console.log("Firebase success: " + JSON.stringify(success));
                    this.userProfile = success;
                    //Change to other page
                })
                .catch((error) => {
                    console.log("Firebase failure: " + JSON.stringify(error));
                });

        }).catch((error) => { console.log(error) });
    }



}

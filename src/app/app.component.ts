import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//API KEYS
//Google Maps Android: AIzaSyBOfV-OJNL_qqWisXMLZ0zSYkp_eaKbYkI
//Google Maps iOS: AIzaSyBk0abBjRN1lKOMBoX_vxMqfHNSVLpsffY

import { HomePage } from '../pages/home/home';

//Non-native imports
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = HomePage;

  constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        const firebaseConfig = {
            apiKey: "AIzaSyBp4mrIdE0BK_48fju9tDp1F6XckwpoSYk",
            authDomain: "protobike-1495735501799.firebaseapp.com",
            databaseURL: "https://protobike-1495735501799.firebaseio.com",
//            projectId: "protobike-1495735501799",
            storageBucket: "protobike-1495735501799.appspot.com",
            messagingSenderId: "777348050122"
        };

        firebase.initializeApp(firebaseConfig);

        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });

    });
  }
}


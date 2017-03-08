import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Auth } from '../providers/auth';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SchoolPage } from '../pages/school/school';
import { SchoolService } from '../providers/school-service';
import { LoadingController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  loader: any;

  constructor(public auth: Auth, public loadingCtrl: LoadingController) {

    this.presentLoading();

    this.auth.getAuth().then((isLoggedIn) => {

      if(isLoggedIn) {
        this.rootPage = SchoolPage
      } else {
        this.rootPage = LoginPage;
      }
      this.loader.dismiss();
    })
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authentication..."
    });

    this.loader.present();
  }

  // constructor(platform: Platform) {
  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     StatusBar.styleDefault();
  //     Splashscreen.hide();
  //   });
  // }
}

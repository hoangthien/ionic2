import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // private username: string;
  // private password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  login(event){
    console.log('clicked');
    console.log(event);
  }

  // getUsername(event){
  //   console.log(event);
  // }

  // getPass(event){
  //   console.log(event);
  // }
}

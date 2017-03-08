import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { Auth } from '../../providers/auth';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	registerCredentials = {username: '', password: ''};

	constructor(public navCtrl: NavController, public navParams: NavParams) {}


	login() {
		var token = btoa(this.registerCredentials.username + ':' + this.registerCredentials.password);

		var headers = new Headers();
		headers.append('Authorization', 'Basic ' + token);
		headers.append('Content-Type', 'application/hal+json');
		headers.append('Accept', 'application/json');
		
		console.log('111111');
		console.log(headers);
		console.log(token);
		console.log(this.registerCredentials);
	}
}

import { Http } from '@angular/http';
// import { HTTP } from 'ionic-native';
import 'rxjs/add/operator/map';
import {Component} from '@angular/core';
import {Auth} from './auth.service';
import {AuthHttp} from 'angular2-jwt';

// import { Injectable }      from '@angular/core';

/*
  Generated class for the MovieService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
// @Injectable()
export class SchoolService {
  message: string;
  
  static get parameters() {
    return [[Http]];
  }

  constructor(private auth: Auth, private http: Http, private authHttp: AuthHttp) {
    // this.loadSchool();
  }

  loadSchool() {
    var url = 'http://rjcat.local.weebpal.com/services/rjcat/school';
    // console.log('1111111111111');
    var response = this.http.get(url).map(res => res.json());
    // .subscribe(
    //     data => this.message = data.text,
    //     error => this.message = error._body
    //   );
    return response;
  }
}

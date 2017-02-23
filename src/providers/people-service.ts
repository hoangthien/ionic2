import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class PeopleService {

  static get parameters() {
    return [[Http]];
  }

  constructor(private http: Http) {

  }

  loadUser() {
      return this.http.get('https://randomuser.me/api/?results=10');
  }
}

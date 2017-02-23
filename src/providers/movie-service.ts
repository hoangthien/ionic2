import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class MovieService {
  static get parameters() {
    return [[Http]];
  }

  constructor(private http: Http) {

  }

  searchMovies(movieName) {
    // 35b258200697209c833e7d7b1058f64e
    var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    // var url = 'http://rjcat.local.weebpal.com/services/rjcat/school';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}

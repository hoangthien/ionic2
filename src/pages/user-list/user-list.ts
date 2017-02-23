import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';

/*
  Generated class for the UserList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
  providers: [MovieService]
})
export class UserListPage {

  movies: Array<any>;

  constructor(public alertCtrl: AlertController, private navCtrl: NavController, public movieService: MovieService) {

  }

  searchMovieDB(event, key) {
    if (event.target.value.length > 2) {
      this.movieService.searchMovies(event.target.value).subscribe(
        data => {
          this.movies = data.results;
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
      );
    }
  }

  itemTapped(event, movie) {
    console.log(movie);
    console.log(movie.original_title);

    let prompt = this.alertCtrl.create({
      title: movie.original_title,
      message: movie.overview,
      inputs: [
        {
          name: 'Title',
          placeholder: movie.vote_average
        },
        {
          name: 'Overview',
          placeholder: movie.vote_count
        },
      ],
    });
    prompt.present();
  }
}
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { UserListPage } from '../pages/user-list/user-list';
import { SchoolListPage } from '../pages/school-list/school-list';
import { LoginPage } from '../pages/login/login';
import { Auth } from './auth.service';

@Component({
  // templateUrl: 'app.html',
  selector: 'my-app',
  providers: [ Auth ],
  templateUrl: 'app/app.template.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = MovieListPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private auth: Auth,
    public platform: Platform,
    public menu: MenuController
  ) {
    // this.auth.handleAuthentication();
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Login', component: LoginPage },      
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Seach Movie', component: MovieListPage },
      { title: 'User List', component: UserListPage },
      { title: 'School List', component: SchoolListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

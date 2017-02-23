import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { UserListPage } from '../pages/user-list/user-list';
import { SchoolListPage } from '../pages/school-list/school-list';
import { LoginPage } from '../pages/login/login';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MovieListPage,
    MovieInfoPage,
    UserListPage,
    SchoolListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    routing,
    // FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MovieListPage,
    MovieInfoPage,
    UserListPage,
    SchoolListPage,
    LoginPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    appRoutingProviders,
    AUTH_PROVIDERS,
  ]
})
export class AppModule { }

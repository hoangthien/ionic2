import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SchoolPage } from '../pages/school/school';
import { SchoolService } from '../providers/school-service';
import { Auth } from '../providers/auth';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SchoolPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SchoolPage
  ],
  providers: [SchoolService, Auth, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

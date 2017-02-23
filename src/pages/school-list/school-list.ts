import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SchoolService } from '../../providers/school-service';

/*
  Generated class for the SchoolList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-school-list',
  templateUrl: 'school-list.html',
  providers: [SchoolService]
})
export class SchoolListPage {
  school: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public schoolService: SchoolService) { }

  schoolLoad() {
    this.schoolService.loadSchool().subscribe(
      data => {
        this.school = data.results;
        console.log(data);
      }
    );
	} 
}

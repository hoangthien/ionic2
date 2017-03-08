import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { School } from '../../providers/school';
import { SchoolService } from '../../providers/school-service';

/*
  Generated class for the School page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-school',
  templateUrl: 'school.html'
})
export class SchoolPage implements OnInit {

	schools: School[];
	selectedSchool: School;

	onSelect(school: School): void {
		this.selectedSchool = school;
	}

	constructor(
		private schoolService: SchoolService,
		// private router: Router
		) { }

	getSchools(): void {
		this.schoolService.getSchools().then(schools => this.schools = schools);
	}

	ngOnInit(): void {
		this.getSchools();
	}

	// gotoDetail(): void {
	// 	this.router.navigate(['/detail', this.selectedSchool.id]);
	// }

	// delete(schools: School): void {
	// 	this.schoolService
	// 	.delete(schools.id)
	// 	.then(() => {
	// 		this.schools = this.schools.filter(h => h !== schools);
	// 		if (this.selectedSchool === schools) { this.selectedSchool = null; }
	// 	});
	// }
}

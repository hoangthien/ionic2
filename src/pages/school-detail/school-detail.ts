import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { School } from '../../providers/school';
import { SchoolService } from '../../providers/school-service';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

/*
  Generated class for the SchoolDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-school-detail',
  templateUrl: 'school-detail.html'
})
export class SchoolDetailPage {
	// @Input()
	// school: School;

	// constructor(
	// 	private schoolService: SchoolService,
	// 	private route: ActivatedRoute,
	// 	private location: Location
	// ){}

	// ngOnInit(): void {
	// 	this.route.params
	// 		.switchMap((params: Params) => this.schoolService.getSchool(params['id']))
	// 		.subscribe(school => this.school = school);
	// }

	// goBack(): void {
	// 	this.location.back();
	// }

	// save(): void {
	// 	this.schoolService.update(this.school)
	// 		.then(() => this.goBack());
	// }

}

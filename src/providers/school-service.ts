import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { School } from './school';

/*
  Generated class for the SchoolService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SchoolService {

	private schoolsUrl = 'http://rjcat.local.weebpal.com/api/v1/sectrack/school';
	private schoolsUrlUpdate = 'http://rjcat.local.weebpal.com/custom_entity_school';
	
	// private headers = new Headers({'Content-Type': 'application/json'});
	private headers = new Headers({'Content-Type': 'application/hal+json', 'Authorization': 'Basic YWRtaW46YWRtaW4='});
	// headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
	// headers.append('Content-Type', 'application/hal+json');

	constructor(private http: Http) { }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	getSchool(id: string): Promise<School> {
		const url = `${this.schoolsUrl}/${id}`;
		// return this.http.get(url)
		// 	.toPromise()
		// 	.then(response => response.json().data as School)
		// 	.catch(this.handleError);
		return this.getSchools()
		.then(schools => schools.find(school => school.id === id));
	}

	getSchools(): Promise<School[]> {
		return this.http.get(this.schoolsUrl)
		.toPromise()
		.then(response => response.json() as School[])
		.catch(this.handleError);
		//return Promise.resolve(SCHOOLS); 
	}

	getSchoolSlowly(): Promise<School[]> {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getSchools()), 3000);
		})
	}

	update(school: School): Promise<School> {
		const url = `${this.schoolsUrlUpdate}/${school.id}`;
		console.log('11111');
		console.log(url);
		console.log(school);
		console.log('11111');
		return this.http
		.put(url, JSON.stringify(school), {headers: this.headers})
		.toPromise()
		.then(() => school)
		.catch(this.handleError);
	}

	delete(id: string): Promise<void> {
		const url = `${this.schoolsUrlUpdate}/${id}`;
		return this.http.delete(url, {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}

}

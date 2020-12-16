import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

	public url:string;

	constructor(private _http: HttpClient) 
	{
		this.url = Global.url;
	}

	sendEmail(form)
	{
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.post(this.url+'send-email',form, {headers: headers});
 	}
}
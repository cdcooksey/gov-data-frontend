import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

import { ConsumerComplaint } from './consumer-complaint';

@Injectable({
  providedIn: 'root'
})

export class ConsumerComplaintService {

  complaintsUrl = 'http://gov-api.cooksey.io/v1/consumer-complaints';

  constructor(private http: HttpClient) { }

  getComplaints() {
    return this.http.get<ConsumerComplaint[]>(this.complaintsUrl)
  }

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			this.log(`${operation} failed: ${error.message}`);
			return of(result as T);	
		}
	}

	private log(message: string) {
    console.log(`Logger: ${message}`);
	}
}

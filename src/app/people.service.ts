import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  
  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000';
  endPoint = '/people';

  getConfig(): Observable<Person[]> {return this.http.get<Person[]>(this.apiUrl + this.endPoint);}

  
}

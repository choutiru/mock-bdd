import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000';
  otherEndPoint = '/other';

  getPeople(): Observable<Person[]> {return this.http.get<Person[]>(this.apiUrl + this.otherEndPoint);}

  addPerson(person: Person): Observable<Person>{
    return this.http.post<Person>(this.apiUrl + this.otherEndPoint, person, httpOptions);
  }

  updatePerson(person:Person): Observable<any>{
    const url = `${this.apiUrl + this.otherEndPoint}/${person.id}`;
    return this.http.put(url, person, httpOptions);
  }

  deletePerson(personID: number){
    const url = `${this.apiUrl + this.otherEndPoint}/${personID}`;
    console.log(url);
    return this.http.delete<void>(url, httpOptions);
  }

}

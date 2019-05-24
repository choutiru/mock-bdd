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

export class PeopleService {
  
  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000';
  endPoint = '/people';

  getPeople(): Observable<Person[]> {return this.http.get<Person[]>(this.apiUrl + this.endPoint);}

  addPerson(person: Person): Observable<Person>{
    return this.http.post<Person>(this.apiUrl + this.endPoint, person, httpOptions);
  }

  updatePerson(person:Person): Observable<any>{
    const url = `${this.apiUrl + this.endPoint}/${person.id}`;
    return this.http.put(url, person, httpOptions);
  }

  deletePerson(personID: number){
    const url = `${this.apiUrl + this.endPoint}/${personID}`;
    console.log(url);
    return this.http.delete<void>(url, httpOptions);
  }



    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

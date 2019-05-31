import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Filter } from './filter';
import { AppSettings } from './app-settings';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000';
  endPointFilter = '/filters';
  


  getAllFilters(): Observable<Filter[]> {return this.http.get<Filter[]>(AppSettings.FILTER_ENDPOINT);}
  getFilterById(id: number): Observable<Filter[]> {return this.http.get<Filter[]>(AppSettings.FILTER_ENDPOINT + '/' + id);}
  addFilter(filter: Filter): Observable<Filter>{return this.http.post<Filter>(AppSettings.FILTER_ENDPOINT, filter, httpOptions);}
  
  updateFilterDescription(filter:Filter): Observable<any>{
    const url = `${AppSettings.FILTER_ENDPOINT}/${filter.id}`;
    return this.http.put(url, filter, httpOptions);
  }
  deleteFilter(filterID: number){
    const url = `${AppSettings.FILTER_ENDPOINT}/${filterID}`;
    return this.http.delete<void>(url, httpOptions);
  }

  

  

  
}

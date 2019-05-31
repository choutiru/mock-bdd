import { Injectable } from '@angular/core';
import { Market } from './market';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Partner } from './partner';
import { AppSettings } from './app-settings';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MarketConfService {


  constructor(private http: HttpClient) { }


  getPeople(): Observable<Market[]> {return this.http.get<Market[]>(AppSettings.MARKET_CONFIGURATION_ENDPOINT);}
  getPartner(): Observable<Partner[]>{return this.http.get<Partner[]>(AppSettings.PARTNER_ENDPOINT);}
  getPartnerByID(id: number) : Observable<Market[]>{return this.http.get<Market[]>(AppSettings.MARKET_CONFIGURATION_ENDPOINT + `?partnerID=${id}`);}
  
  // ##################
  // ATTENTION liste d'ID pour up time request
  putMarketConf(marketConf: Market[]) : Observable<any>[] {
    var listObs = [];
    for (const aMarket of marketConf) {
      listObs.push(this.http.put(AppSettings.MARKET_CONFIGURATION_ENDPOINT + '/' + aMarket.id, aMarket, httpOptions));
    }
    return listObs;
  }

}

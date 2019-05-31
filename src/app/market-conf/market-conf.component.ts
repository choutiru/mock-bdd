import { Component, OnInit } from '@angular/core';
import { Market } from '../market';
import { MarketConfService } from '../market-conf.service';
import { Partner } from '../partner';
import { MarketData } from '../market-data';

@Component({
  selector: 'app-market-conf',
  templateUrl: './market-conf.component.html',
  styleUrls: ['./market-conf.component.css']
})
export class MarketConfComponent implements OnInit {

  marketConfs:Market[];
  partnerConfs:Partner[];

  marketConf: Market;
  partnerConf: Partner;
  
  selectedMarket: Market;
  selectedPartner : Partner;

  

  constructor(private marketConfService: MarketConfService ) { }

  ngOnInit() {
    //this.setMarketConfServer();
    this.setPartnerServer();
  }

  setMarketConfServer(): void {
    this.marketConfService.getPeople().subscribe(peoples => this.marketConfs = peoples);
  }

  onSelect(market: Market){
    this.selectedMarket = market;
  }

  setPartnerServer(): void{
    this.marketConfService.getPartner().subscribe(partnerList => this.partnerConfs = partnerList);
  }

  infos(partner: Partner): void {
    this.selectedPartner = partner;
    this.marketConfService.getPartnerByID(this.selectedPartner.id).subscribe(partnerDetails => this.marketConfs = partnerDetails);
  }

  activate(market: MarketData): void {
    market.isActive ? market.isActive = false : market.isActive = true;
    //market.isActive = false;
  }
  save(): void {
    var marketsToFilter = [];
    var observer = [];
    marketsToFilter = this.marketConfs.filter(h => h.isActive == false);
    observer = this.marketConfService.putMarketConf(marketsToFilter);
    for (const anObserver of observer) {
      anObserver.subscribe();
    }
  }



}

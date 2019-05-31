import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { OtherComponent } from './other/other.component';
import { MarketConfComponent } from './market-conf/market-conf.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    OtherComponent,
    MarketConfComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Filter } from '../filter';
import { FilterService } from '../filter.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})


export class FilterComponent implements OnInit {

  filters: Filter[];

  constructor(private filterService: FilterService) { }
  ngOnInit() { this.setFilters();  }

  setFilters(): void {this.filterService.getAllFilters().subscribe(filterList => this.filters = filterList);}
  
}

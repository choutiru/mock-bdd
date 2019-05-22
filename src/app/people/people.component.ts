import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people:Person[];
  
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
   this.setPeopleServer();
    //this.people = this.generatePeople();
  }

  setPeopleServer(): void {
    this.peopleService.getConfig().subscribe(peoples => this.people = peoples);
  }

  



}

import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people:Person[];
  selectedPerson: Person;

  
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
   this.setPeopleServer();
  }

  setPeopleServer(): void {
    this.peopleService.getPeople().subscribe(peoples => this.people = peoples);
  }

  add(name:string, surname: string, mail: string): void{
    name = name.trim();
    surname = surname.trim();
    mail = mail.trim();
    if(!name || !surname || !mail){return;}
    this.peopleService.addPerson({name, surname, mail} as Person)
      .subscribe(person =>{this.people.push(person);});
  }

  onSelect(person: Person): void{
    this.selectedPerson = person;
  }

  save(): void{
    this.peopleService.updatePerson(this.selectedPerson).subscribe();
  }

  delete(person: Person){
    this.people = this.people.filter(h => h !== person);
    console.log("here " + person.name);
    this.peopleService.deletePerson(person.id).subscribe();
  }

  



}

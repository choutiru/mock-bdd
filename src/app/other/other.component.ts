import { Component, OnInit } from '@angular/core';
import { OtherService } from '../other.service';
import { Person } from '../person';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  other:Person[];
  selectedOther: Person;
  
  constructor(private otherService: OtherService) { }

  ngOnInit() {
    this.setPeopleServer();
  }

  setPeopleServer(): void {
    this.otherService.getPeople().subscribe(others => this.other = others);
  }

  add(name:string, surname: string, mail: string): void{
    name = name.trim();
    surname = surname.trim();
    mail = mail.trim();
    if(!name || !surname || !mail){return;}
    this.otherService.addPerson({name, surname, mail} as Person)
      .subscribe(person =>{this.other.push(person);});
  }

  onSelect(person: Person): void{
    this.selectedOther = person;
  }

  save(service:string): void{
    this.otherService.updatePerson(this.selectedOther).subscribe();
  }

  delete(person: Person){
    this.other = this.other.filter(h => h !== person);
    console.log("here " + person.name);
    this.otherService.deletePerson(person.id).subscribe();
  }

  

}

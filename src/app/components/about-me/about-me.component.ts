import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  tituloSection: string = 'Sobre mí';

  person: Person = new Person('', '', '', '', '', '', '');

  constructor(public personService: ServiceService) {}
  ngOnInit(): void {
    this.personService.getPerson().subscribe((data) => {
      this.person = data;
    });
  }
}

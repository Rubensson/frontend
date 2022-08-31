import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  person: Person = new Person('', '', '', '', '', '', '');
  hero_img: string = '';

  constructor(public personService: ServiceService) {}

  ngOnInit(): void {
    this.personService.getPerson().subscribe((data) => {
      this.person = data;
      this.hero_img = this.person.hero_img;
    });
  }
}

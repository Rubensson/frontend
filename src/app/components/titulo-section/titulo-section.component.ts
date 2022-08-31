import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-section',
  templateUrl: './titulo-section.component.html',
  styleUrls: ['./titulo-section.component.css'],
})
export class TituloSectionComponent implements OnInit {
  @Input() tituloSection: string = '';
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class SkillsComponent implements OnInit {
  tituloSection: string = 'Habilidades';

  skills: Education[] = [];
  isLogged = false;

  constructor(
    private educationService: EducationService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadSkills(): void {
    this.educationService.list().subscribe((data) => {
      this.skills = data;
    });
  }
  delete(id?: number) {
    if (id != undefined) {
      this.educationService.delete(id).subscribe(
        (data) => {
          this.loadSkills();
        },
        (err) => {
          alert('Not deleted skill');
        }
      );
    }
  }
}

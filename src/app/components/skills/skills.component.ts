import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  tituloSection: string = 'Habilidades';

  skills: Skills[] = [];
  isLogged = false;

  constructor(
    private skillsService: SkillsService,
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
    this.skillsService.list().subscribe((data) => {
      this.skills = data;
    });
  }
  delete(id?: number) {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe(
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

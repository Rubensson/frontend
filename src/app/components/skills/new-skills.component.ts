import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css'],
})
export class NewSkillsComponent implements OnInit {
  skillName: string = '';
  description: string = '';
  skill_img: string = '';
  constructor(private skillService: SkillsService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const skills = new Skills(this.skillName, this.description, this.skill_img);
    this.skillService.save(skills).subscribe(
      (data) => {
        alert('Added skill');
        this.router.navigate(['home']);
      },
      (err) => {
        alert('Failure');
        this.router.navigate(['home']);
      }
    );
  }
}

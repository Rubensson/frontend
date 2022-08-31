import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css'],
})
export class EditSkillsComponent implements OnInit {
  skill: Skills = null;
  constructor(
    private skillservice: SkillsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.skillservice.detail(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        alert('Skill update failure');
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.skillservice.update(id, this.skill).subscribe(
      (data) => {
        this.router.navigate(['home']);
      },
      (err) => {
        alert('Skill update failure');
        this.router.navigate(['home']);
      }
    );
  }
}

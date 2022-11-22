import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditSkillsComponent implements OnInit {
  education: Education = null;
  constructor(
    private educationervice: EducationService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.educationervice.detail(id).subscribe(
      (data) => {
        this.education = data;
      },
      (err) => {
        alert('Education update failure');
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.educationervice.update(id, this.education).subscribe(
      (data) => {
        this.router.navigate(['home']);
      },
      (err) => {
        alert('Education update failure');
        this.router.navigate(['home']);
      }
    );
  }
}

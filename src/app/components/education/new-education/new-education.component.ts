import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css'],
})
export class NewEducationComponent implements OnInit {
  educationName: string = '';
  description: string = '';
  education_img: string = '';
  constructor(
    private educationService: EducationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const education = new Education(
      this.educationName,
      this.description,
      this.education_img
    );
    this.educationService.save(education).subscribe(
      (data) => {
        alert('Added education');
        this.router.navigate(['home']);
      },
      (err) => {
        alert('Failure');
        this.router.navigate(['home']);
      }
    );
  }
}

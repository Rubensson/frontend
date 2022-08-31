import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
  projectName: string = '';
  description: string = '';
  project_img: string = '';
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const project = new Project(
      this.projectName,
      this.description,
      this.project_img
    );
    this.projectService.save(project).subscribe(
      (data) => {
        alert('Added project');
        this.router.navigate(['home']);
      },
      (err) => {
        alert('Failure');
        this.router.navigate(['home']);
      }
    );
  }
}

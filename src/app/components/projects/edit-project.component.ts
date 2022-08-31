import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
})
export class EditProjectComponent implements OnInit {
  project: Project = null;

  constructor(
    private projectService: ProjectService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.projectService.detail(id).subscribe(
      (data) => {
        this.project = data;
      },
      (err) => {
        alert('Project update failure');
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.projectService.update(id, this.project).subscribe(
      (data) => {
        this.router.navigate(['home']);
      },
      (err) => {
        alert('Project update failure');
        this.router.navigate(['home']);
      }
    );
  }
}

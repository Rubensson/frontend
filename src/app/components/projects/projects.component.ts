import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  tituloSection: string = 'Projects';

  project: Project[] = [];
  isLogged = false;
  constructor(
    private projectService: ProjectService,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
    this.loadProject();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  loadProject(): void {
    this.projectService.list().subscribe((data) => {
      this.project = data;
    });
  }
  delete(id?: number) {
    if (id != undefined) {
      this.projectService.delete(id).subscribe(
        (data) => {
          this.loadProject();
        },
        (err) => {
          alert('Not deleted project');
        }
      );
    }
  }
}

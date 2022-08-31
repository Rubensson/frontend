export class Project {
  id!: number;
  projectName!: string;
  description!: string;
  project_img!: string;

  constructor(projectName: string, description: string, project_img: string) {
    this.projectName = projectName;
    this.description = description;
    this.project_img = project_img;
  }
}

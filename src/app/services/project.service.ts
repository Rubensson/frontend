import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projectURL = 'http://localhost:8080/project/';

  constructor(private httpClient: HttpClient) {}

  public list(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectURL + 'list');
  }

  public detail(id: number): Observable<Project> {
    return this.httpClient.get<Project>(this.projectURL + `detail/${id}`);
  }

  public save(project: Project): Observable<any> {
    return this.httpClient.post<any>(this.projectURL + 'create', project);
  }
  public update(id: number, project: Project): Observable<any> {
    return this.httpClient.put<any>(this.projectURL + `update/${id}`, project);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.projectURL + `delete/${id}`);
  }
}

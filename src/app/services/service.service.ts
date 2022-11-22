import { Injectable } from '@angular/core'; //Permite que este servicio sea inyectado en los componentes
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  URL = 'http://localhost:8080/person/';
  // URL = ' https://bkndportfolio.herokuapp.com/person/';

  constructor(private http: HttpClient) {}

  public getPerson(): Observable<Person> {
    return this.http.get<Person>(this.URL + 'get/profile');
  }
}

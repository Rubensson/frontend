import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from '../model/new-user';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';
  // authURL = ' https://bkndportfolio.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) {}

  public newUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'New user', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser);
  }
}

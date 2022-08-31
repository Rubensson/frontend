import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user';
import { Person } from 'src/app/model/person.model';
import { AuthService } from 'src/app/services/auth.service';
import { ServiceService } from 'src/app/services/service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUser!: LoginUser;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errMsg!: string;
  hero_img: string = '';
  person: Person = new Person('', '', '', '', '', '', '');

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    public personService: ServiceService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.personService.getPerson().subscribe((data) => {
        this.person = data;
        this.hero_img = this.person.hero_img;
      });
    }
  }

  onLogin(): void {
    this.loginUser = new LoginUser(this.userName, this.password);
    this.authService.login(this.loginUser).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsg = err.error.message;
        console.log(this.errMsg);
      }
    );
  }
}

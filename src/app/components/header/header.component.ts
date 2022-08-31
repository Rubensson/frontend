import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenServce: TokenService) {}

  ngOnInit(): void {
    if (this.tokenServce.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  onlogOut(): void {
    this.tokenServce.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }
}

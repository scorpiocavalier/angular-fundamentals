import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: 'login.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  userName;
  password;
  mouseoverLogin;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login({ userName, password }) {
    this.authService.loginUser(userName, password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}

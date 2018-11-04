import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../lib';

@Component({
  selector: 'eb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _router: Router, private _user: UserService) {}

  setCurrentUser(userName: string) {
    this._user
      .login(userName)
      .subscribe(() => this._router.navigateByUrl('/chat'));
  }
}

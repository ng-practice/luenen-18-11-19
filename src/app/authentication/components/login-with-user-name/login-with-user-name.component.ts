import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'eb-login-with-user-name',
  templateUrl: './login-with-user-name.component.html',
  styleUrls: ['./login-with-user-name.component.scss']
})
export class LoginWithUserNameComponent {
  @Output()
  login = new EventEmitter<string>();

  userNameField = new FormControl('', Validators.required);

  emitLogin() {
    this.login.emit(this.userNameField.value);
  }
}

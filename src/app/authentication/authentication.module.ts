import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginWithUserNameComponent } from './components/login-with-user-name/login-with-user-name.component';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,

    AuthenticationRoutingModule
  ],
  declarations: [LoginWithUserNameComponent, LoginComponent]
})
export class AuthenticationModule {}

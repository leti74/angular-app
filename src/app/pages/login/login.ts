import { Component } from '@angular/core';
import { LoginComponent } from "./componets-login/login-component";

@Component({
  selector: 'app-login',
  imports: [LoginComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}

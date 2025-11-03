import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../../auth/auth-service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login-component',
  imports: [MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent implements OnInit {


constructor(private authService: AuthService, private router: Router){}

loginForm!: FormGroup;
errorMsg= '';
loading = false;

ngOnInit(): void {
this.loginForm = new FormGroup(
  {
    token: new FormControl('',Validators.required)
  }
)
}

onLogin(){
  
  const token = this.loginForm.value.token

  if(!token){
this.errorMsg= 'Please enter a valid token'
  }
  this.loading = true;
  this.errorMsg = '';

  this.authService.validateToken(token).subscribe((res)=>{
if(res){
  
  this.authService.saveToken(token);
  this.router.navigate(['users'])
}else{
  this.loading= false;
  this.errorMsg = 'Invalid token. Please check and try again.'
}
  })

}
}

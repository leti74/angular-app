import { Component, input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../auth/auth-service';



@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterLink, RouterLinkActive, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

constructor(public authService: AuthService, private router: Router){}



logout() {
  this.authService.logout();
  this.router.navigate(['login']);
}
}

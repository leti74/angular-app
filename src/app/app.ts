import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Login } from './pages/login/login';
import { AuthService } from './auth/auth-service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  

  constructor(private authService: AuthService){}

  isSubscribed!: boolean
  ngOnInit(): void {
   this.isSubscribed = this.authService.isAuthenticated()
  }


}

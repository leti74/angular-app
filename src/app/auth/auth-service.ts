import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL= 'https://gorest.co.in/public/v2'


  constructor(private http: HttpClient){}

  validateToken(token:string):Observable<boolean>{
    return this.http.get(`${this.baseURL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).pipe(
      map((res)=> {
        console.log('✅ Token valido, risposta:', res); return true}),
      catchError(()=> of(false))
    )
  }

  saveToken(token:string){
    localStorage.setItem('access_token', token)
  }


  getToken(): string | null{
    return localStorage.getItem('access_token')
  }

  logout():void {
    localStorage.removeItem('access_token')
    !this.isAuthenticated()
  }

  isAuthenticated(): boolean {
  return !!this.getToken()
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token', token);
    console.log(token)
    this.route.navigate(['/']);
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token');
    return !!token;
  }

  clearToken(): void{
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }
}

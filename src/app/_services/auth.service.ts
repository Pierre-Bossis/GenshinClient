import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
import { LoginForm, RegisterForm } from '../_models/user';
// import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = environment.apiurl
  
  constructor(private client:HttpClient,private route:Router) { }

  login(logs:LoginForm){
    this.client.post(this.url + "auth/login", logs)
      .subscribe({
        next : () => {
          this.route.navigate(["home"])
        }
      })
  }

  register(user : RegisterForm) {    
    this.client.post(this.url+"auth/register", user).subscribe({
      next : () => {
        this.route.navigate(["login"])
      },
      error : (error) => {
        console.log(error.message);
      }
    })
  }

  logout(){
    localStorage.clear()
    this.route.navigate(["home"])
  }
}

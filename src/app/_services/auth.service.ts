import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
import { ConnectedUser, LoginForm, RegisterForm } from '../_models/user';
import * as jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = environment.apiurl

  get connectedUser() : ConnectedUser | undefined {
    let user = localStorage.getItem("userInfo")
    if(user != undefined)
      return JSON.parse(user)
    return undefined
  }

  connectedUserSubject : Subject<ConnectedUser | undefined> = new Subject<ConnectedUser | undefined>()
  
  constructor(private client:HttpClient,private route:Router) { }

  login(logs:LoginForm){
    this.client.post(this.url + "auth/login", logs, {responseType : 'text'})
      .subscribe({
        next : (token : string) => {
          localStorage.setItem("token", token)
          let decodedToken : any = jwt_decode.jwtDecode(token)
          let cn : ConnectedUser = {
            id : decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"],
            role : decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
            email : decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            username : decodedToken["Username"],
            avatar_Id : decodedToken["Avatar_Id"]
          }

          localStorage.setItem("userInfo", JSON.stringify(cn))
          this.connectedUserSubject.next(this.connectedUser)
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
    this.connectedUserSubject.next(this.connectedUser)
    this.route.navigate(["home"])
  }
}

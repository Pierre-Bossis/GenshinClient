import { Component } from '@angular/core';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isConnected! : boolean

  connectedUser! : ConnectedUser | undefined

  constructor(private authService : AuthService){}

  ngOnInit(){
    this.connectedUser = this.authService.connectedUser
    this.authService.connectedUserSubject.subscribe({
      next : (data : ConnectedUser | undefined) => this.connectedUser = data
    })
  }
  logout() {
    this.authService.logout()
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Avatars } from 'src/app/_models/avatars';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { AvatarService } from 'src/app/_services/avatar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isConnected!: boolean
  avatarUser!: string
  avatarsListe: Avatars[] = []

  connectedUser!: ConnectedUser | undefined

  constructor(private authService: AuthService, private avatarService: AvatarService, private router: Router) { }

  ngOnInit() {
    this.connectedUser = this.authService.connectedUser
    this.authService.connectedUserSubject.subscribe({
      next: (data: ConnectedUser | undefined) => {
        this.connectedUser = data
        if (this.connectedUser)
          this.loadAvatar()
        else
          this.avatarUser = '';
      }
    })
    //charge l'avatar de l'user si il est déjà connecté ()
    this.loadAvatar()
    //charge la liste de tous les avatars pour pouvoir changer
    this.avatarService.getAll().subscribe((data) => this.avatarsListe = data)
  }

  private loadAvatar() {
    if (this.connectedUser)
      this.avatarService.getById(this.connectedUser.avatar_Id).subscribe((data) => {
        this.avatarUser = data.nom;
      });
  }

  changeAvatar(id: number,nom:string) {
    this.avatarService.changeAvatar(id, this.connectedUser?.id)

    //methode pour actualiser l'avatar à changer ( voir avec regénérer un token et l'actualiser dans le authservice qui lui changera dans le localstorage)
    this.avatarUser = nom
    let dataString = localStorage.getItem('userInfo');

    if (dataString !== null) {
      let data = JSON.parse(dataString);

      data.avatar_Id = id;
      localStorage.setItem('userInfo', JSON.stringify(data))
    }
  }

  logout() {
    this.authService.logout()
    this.avatarUser = ''
  }
}

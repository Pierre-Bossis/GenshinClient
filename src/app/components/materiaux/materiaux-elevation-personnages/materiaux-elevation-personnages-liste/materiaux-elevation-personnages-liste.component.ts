import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MateriauxElevationPersonnages } from 'src/app/_models/materiaux-elevation-personnages';
import { AuthService } from 'src/app/_services/auth.service';
import { MateriauxElevationPersonnagesService } from 'src/app/_services/materiaux-elevation-personnages.service';

@Component({
  selector: 'app-materiaux-elevation-personnages-liste',
  templateUrl: './materiaux-elevation-personnages-liste.component.html',
  styleUrls: ['./materiaux-elevation-personnages-liste.component.css']
})
export class MateriauxElevationPersonnagesListeComponent {
  role!:string | undefined
  materiauxListe:MateriauxElevationPersonnages[] = []
  constructor(private matService:MateriauxElevationPersonnagesService,private route:Router,private authService:AuthService){}

  ngOnInit(): void {
    this.role = this.authService.connectedUser?.role

    this.matService.getAll().subscribe((data) => this.materiauxListe = data)
  }
}

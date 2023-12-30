import { Component } from '@angular/core';
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
  materiauxListeFiltre:MateriauxElevationPersonnages[] = []

  constructor(private matService:MateriauxElevationPersonnagesService,private authService:AuthService){}

  ngOnInit(): void {
    this.role = this.authService.connectedUser?.role

    this.matService.getAll().subscribe((data) => {
      this.materiauxListe = data
      this.materiauxListeFiltre = this.materiauxListe
    })
  }

  filtre(search: string) {    
    search = search?.trim() ?? null;

    if (search !== null && search !== '') {
      this.materiauxListeFiltre = this.materiauxListe.filter((materiaux: MateriauxElevationPersonnages) =>
        materiaux.nom.toLowerCase().includes(search!.toLowerCase())
      );      
    }
    else
      this.materiauxListeFiltre = this.materiauxListe
  }
}

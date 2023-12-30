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
      this.totalItems = this.materiauxListe.length
    })
  }

  filtre(search: string) {
    this.currentPage = 1;
  
    search = search?.trim().toLowerCase() ?? '';
  
    if (search === '') {
      this.materiauxListeFiltre = this.materiauxListe;
    } else {
      this.materiauxListeFiltre = this.materiauxListe.filter((produit: MateriauxElevationPersonnages) =>
        produit.nom.toLowerCase().includes(search)
      );
    }
  }

    //-------------- Pagination --------------
    pageSize = 10;
    currentPage = 1;
    totalItems!: number
    onPageChange(pageNumber: number) {
      this.currentPage = pageNumber;
    }
}

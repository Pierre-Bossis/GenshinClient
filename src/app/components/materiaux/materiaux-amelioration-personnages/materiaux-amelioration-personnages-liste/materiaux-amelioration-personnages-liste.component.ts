import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MateriauxAmeliorationPersonnages } from 'src/app/_models/materiaux-amelioration-personnages';
import { AuthService } from 'src/app/_services/auth.service';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';

@Component({
  selector: 'app-materiaux-amelioration-personnages-liste',
  templateUrl: './materiaux-amelioration-personnages-liste.component.html',
  styleUrls: ['./materiaux-amelioration-personnages-liste.component.css']
})
export class MateriauxAmeliorationPersonnagesListeComponent {
  role!:string | undefined
  materiauxListe:MateriauxAmeliorationPersonnages[] = []
  materiauxListeFiltre:MateriauxAmeliorationPersonnages[] = []
  constructor(private matService:MateriauxAmeliorationPersonnagesService,private route:Router,private authService:AuthService){}

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
      this.materiauxListeFiltre = this.materiauxListe.filter((materiaux: MateriauxAmeliorationPersonnages) =>
        materiaux.nom.toLowerCase().includes(search!.toLowerCase())
      );      
    }
    else
      this.materiauxListeFiltre = this.materiauxListe
  }
}

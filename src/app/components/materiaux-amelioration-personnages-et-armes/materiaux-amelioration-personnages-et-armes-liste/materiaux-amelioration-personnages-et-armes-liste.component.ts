import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MateriauxAmeliorationPersonnagesEtArmes } from 'src/app/_models/materiaux-amelioration-personnages-et-armes';
import { AuthService } from 'src/app/_services/auth.service';
import { MateriauxAmeliorationPersonnagesEtArmesService } from 'src/app/_services/materiaux-amelioration-personnages-et-armes.service';

@Component({
  selector: 'app-materiaux-amelioration-personnages-et-armes-liste',
  templateUrl: './materiaux-amelioration-personnages-et-armes-liste.component.html',
  styleUrls: ['./materiaux-amelioration-personnages-et-armes-liste.component.css']
})
export class MateriauxAmeliorationPersonnagesEtArmesListeComponent {
  role!:string | undefined
  materiauxListe:MateriauxAmeliorationPersonnagesEtArmes[] = []
  materiauxListeFiltre:MateriauxAmeliorationPersonnagesEtArmes[] = []

  constructor(private matService:MateriauxAmeliorationPersonnagesEtArmesService,private route:Router,private authService:AuthService){}

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
      this.materiauxListeFiltre = this.materiauxListe.filter((materiaux: MateriauxAmeliorationPersonnagesEtArmes) =>
        materiaux.nom.toLowerCase().includes(search!.toLowerCase())
      );      
    }
    else
      this.materiauxListeFiltre = this.materiauxListe
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MateriauxAmeliorationPersonnagesEtArmes } from 'src/app/_models/materiaux-amelioration-personnages-et-armes';
import { MateriauxAmeliorationPersonnagesEtArmesService } from 'src/app/_services/materiaux-amelioration-personnages-et-armes.service';

@Component({
  selector: 'app-materiaux-amelioration-personnages-et-armes-liste',
  templateUrl: './materiaux-amelioration-personnages-et-armes-liste.component.html',
  styleUrls: ['./materiaux-amelioration-personnages-et-armes-liste.component.css']
})
export class MateriauxAmeliorationPersonnagesEtArmesListeComponent {
  materiauxListe:MateriauxAmeliorationPersonnagesEtArmes[] = []
  constructor(private matService:MateriauxAmeliorationPersonnagesEtArmesService,private route:Router){}

  ngOnInit(): void {
    this.matService.getAll().subscribe((data) => this.materiauxListe = data)
  }
}

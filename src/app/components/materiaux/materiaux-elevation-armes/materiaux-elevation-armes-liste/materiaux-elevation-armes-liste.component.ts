import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MateriauxElevationArmes } from 'src/app/_models/materiaux-elevation-armes';
import { MateriauxElevationArmesService } from 'src/app/_services/materiaux-elevation-armes.service';

@Component({
  selector: 'app-materiaux-elevation-armes-liste',
  templateUrl: './materiaux-elevation-armes-liste.component.html',
  styleUrls: ['./materiaux-elevation-armes-liste.component.css']
})
export class MateriauxElevationArmesListeComponent implements OnInit{
  materiauxListe:MateriauxElevationArmes[] = []
  constructor(private matService:MateriauxElevationArmesService,private route:Router){}

  ngOnInit(): void {
    this.matService.getAll().subscribe((data) => this.materiauxListe = data)
  }

}

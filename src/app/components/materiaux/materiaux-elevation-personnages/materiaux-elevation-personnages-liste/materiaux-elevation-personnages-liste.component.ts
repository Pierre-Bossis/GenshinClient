import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MateriauxElevationPersonnages } from 'src/app/_models/materiaux-elevation-personnages';
import { MateriauxElevationPersonnagesService } from 'src/app/_services/materiaux-elevation-personnages.service';

@Component({
  selector: 'app-materiaux-elevation-personnages-liste',
  templateUrl: './materiaux-elevation-personnages-liste.component.html',
  styleUrls: ['./materiaux-elevation-personnages-liste.component.css']
})
export class MateriauxElevationPersonnagesListeComponent {
  materiauxListe:MateriauxElevationPersonnages[] = []
  constructor(private matService:MateriauxElevationPersonnagesService,private route:Router){}

  ngOnInit(): void {
    this.matService.getAll().subscribe((data) => this.materiauxListe = data)
  }
}

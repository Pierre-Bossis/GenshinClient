import { Component, OnInit } from '@angular/core';
import { MateriauxElevationArmes } from './_models/materiaux-elevation-armes';
import { MateriauxElevationArmesService } from './_services/materiaux-elevation-armes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mats:MateriauxElevationArmes[] = []
  constructor(private mat:MateriauxElevationArmesService) {
   
    
  }
  ngOnInit(): void {
    this.mat.getAll().subscribe((data) => this.mats = data)
  }


}

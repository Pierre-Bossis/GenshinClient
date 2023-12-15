import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personnages } from 'src/app/_models/personnages';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-personnage-liste',
  templateUrl: './personnage-liste.component.html',
  styleUrls: ['./personnage-liste.component.css']
})
export class PersonnageListeComponent {
  personnages:Personnages[] = []
  constructor(private personnagesService:PersonnagesService, private route:Router){}
  ngOnInit(): void {
    this.personnagesService.getAll().subscribe((data)=>{
      this.personnages = data      
    }) 
  }


  goDetails(nom:string){
    this.route.navigate(["personnages/"+nom])
  }
}

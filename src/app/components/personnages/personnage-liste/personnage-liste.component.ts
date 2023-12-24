import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';
import { Personnages } from 'src/app/_models/personnages';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-personnage-liste',
  templateUrl: './personnage-liste.component.html',
  styleUrls: ['./personnage-liste.component.css']
})
export class PersonnageListeComponent {
  showTrigger: NgxPopperjsTriggers = NgxPopperjsTriggers.hover;
  popperPlacement: NgxPopperjsPlacements = NgxPopperjsPlacements.TOPEND
  
  personnages:Personnages[] = []
  personnagesFiltre:Personnages[] = []
  constructor(private personnagesService:PersonnagesService, private route:Router){}
  ngOnInit(): void {
    this.personnagesService.getAll().subscribe((data)=>{
      this.personnages = data
      this.personnagesFiltre = this.personnages  
    }) 
  }


  goDetails(nom:string){
    this.route.navigate(["personnages/"+nom])
  }

  filter(oeilDivin:string){
    if(oeilDivin == 'all') 
      this.personnagesFiltre = this.personnages
    else
      this.personnagesFiltre = this.personnages.filter(personnage => personnage.oeilDivin == oeilDivin)
  }
}

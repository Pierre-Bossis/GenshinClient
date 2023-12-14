import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Armes } from 'src/app/_models/armes';
import { ArmesService } from 'src/app/_services/armes.service';

@Component({
  selector: 'app-armes-liste',
  templateUrl: './armes-liste.component.html',
  styleUrls: ['./armes-liste.component.css']
})
export class ArmesListeComponent implements OnInit {
  armes:Armes[] = []
  constructor(private armesService:ArmesService, private route:Router){}
  ngOnInit(): void {
    this.armesService.getAll().subscribe((data)=>this.armes = data) 
  }


  goDetails(nom:string){
    this.route.navigate(["armes/"+nom])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPopperjsTriggers,NgxPopperjsPlacements } from 'ngx-popperjs';
import { Armes } from 'src/app/_models/armes';
import { ArmesService } from 'src/app/_services/armes.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-armes-liste',
  templateUrl: './armes-liste.component.html',
  styleUrls: ['./armes-liste.component.css']
})
export class ArmesListeComponent implements OnInit {
  role!:string | undefined
  showTrigger: NgxPopperjsTriggers = NgxPopperjsTriggers.hover;
  popperPlacement: NgxPopperjsPlacements = NgxPopperjsPlacements.RIGHT
  armes:Armes[] = []
  armesFiltre:Armes[] = []
  constructor(private armesService:ArmesService, private route:Router, private authService:AuthService){}
  ngOnInit(): void {
    this.role = this.authService.connectedUser?.role
    
    this.armesService.getAll().subscribe((data)=>{
      this.armes = data
      this.armesFiltre = this.armes
      console.log(data);
      
    }) 
  }


  goDetails(nom:string){
    this.route.navigate(["armes/"+nom])
  }

  filter(typeArme:string){
    if(typeArme == 'all') 
      this.armesFiltre = this.armes
    else
      this.armesFiltre = this.armes.filter(arme => arme.typeArme == typeArme)
  }
}

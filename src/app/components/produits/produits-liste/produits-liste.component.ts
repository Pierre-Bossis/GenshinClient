import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produits } from 'src/app/_models/produits';
import { ProduitsService } from 'src/app/_services/produits.service';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-produits-liste',
  templateUrl: './produits-liste.component.html',
  styleUrls: ['./produits-liste.component.css']
})
export class ProduitsListeComponent {
  role!:string | undefined
  produits:Produits[] = []
  constructor(private produitsService:ProduitsService, private route:Router,private authService:AuthService){}
  ngOnInit(): void {
    this.role = this.authService.connectedUser?.role
    
    this.produitsService.getAll().subscribe((data)=>{
      this.produits = data
      console.log(data);
      
    }) 
  }
  
  goDetails(nom:string){
    this.route.navigate(["produits/"+nom])
  }
}

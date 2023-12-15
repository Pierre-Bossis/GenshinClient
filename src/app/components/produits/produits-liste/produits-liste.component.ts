import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produits } from 'src/app/_models/produits';
import { ProduitsService } from 'src/app/_services/produits.service';

@Component({
  selector: 'app-produits-liste',
  templateUrl: './produits-liste.component.html',
  styleUrls: ['./produits-liste.component.css']
})
export class ProduitsListeComponent {
  produits:Produits[] = []
  constructor(private produitsService:ProduitsService, private route:Router){}
  ngOnInit(): void {
    this.produitsService.getAll().subscribe((data)=>{
      this.produits = data
      console.log(data);
      
    }) 
  }
  
  goDetails(nom:string){
    this.route.navigate(["produits/"+nom])
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produits } from 'src/app/_models/produits';
import { ProduitsService } from 'src/app/_services/produits.service';

@Component({
  selector: 'app-produits-details',
  templateUrl: './produits-details.component.html',
  styleUrls: ['./produits-details.component.css']
})
export class ProduitsDetailsComponent {
  produit!:Produits
  produitName:string | null = null
  constructor(private produitsService:ProduitsService, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.produitName = params.get('name');      
    });
  
    if(this.produitName != null)
    {      
      this.produitsService.getByName(this.produitName).subscribe((data) =>{        
        this.produit = data
      })      
    }
  }
}

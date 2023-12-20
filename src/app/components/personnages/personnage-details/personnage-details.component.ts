import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Armes } from 'src/app/_models/armes';
import { MateriauxAmeliorationPersonnages } from 'src/app/_models/materiaux-amelioration-personnages';
import { Personnages } from 'src/app/_models/personnages';
import { Produits } from 'src/app/_models/produits';
import { ArmesService } from 'src/app/_services/armes.service';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';
import { PersonnagesService } from 'src/app/_services/personnages.service';
import { ProduitsService } from 'src/app/_services/produits.service';

@Component({
  selector: 'app-personnage-details',
  templateUrl: './personnage-details.component.html',
  styleUrls: ['./personnage-details.component.css']
})
export class PersonnageDetailsComponent {
  personnage!:Personnages
  arme!:Armes
  produit!:Produits
  mat!:MateriauxAmeliorationPersonnages

  personnageName:string | null = null
  trailer!:SafeResourceUrl;

  constructor(private personnagesService:PersonnagesService,
              private armesService:ArmesService,
              private produitsService:ProduitsService,
              private materiauxAmeliorationPersonnagesService:MateriauxAmeliorationPersonnagesService,
              private route:ActivatedRoute,
              private sanitizer: DomSanitizer,
              private router:Router ){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.personnageName = params.get('name');      
    });
  
    if(this.personnageName != null)
    {      
      this.personnagesService.getByName(this.personnageName).subscribe((data) =>{                        
        this.personnage = data
        
        if(data.arme_Id){
          this.armesService.getById(data.arme_Id).subscribe((dataArme) => this.arme = dataArme.arme)
        }

        if(data.produit_Id){
          this.produitsService.getById(data.produit_Id).subscribe((dataProduit) => this.produit = dataProduit)
        }

        if(data.materiauxAmeliorationPersonnage_Id){
          this.materiauxAmeliorationPersonnagesService.getById(data.materiauxAmeliorationPersonnage_Id).subscribe((dataMat) => this.mat = dataMat)
        }

        this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.personnage.trailerYT);
      })      
    }
  }

  goDetails(nom:string){
    this.router.navigate(["armes/"+nom])
  }
}

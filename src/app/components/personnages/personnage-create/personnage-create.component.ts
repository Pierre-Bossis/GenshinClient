import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Armes } from 'src/app/_models/armes';
import { MateriauxAmeliorationPersonnages } from 'src/app/_models/materiaux-amelioration-personnages';
import { Produits } from 'src/app/_models/produits';
import { ArmesService } from 'src/app/_services/armes.service';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';
import { PersonnagesService } from 'src/app/_services/personnages.service';
import { ProduitsService } from 'src/app/_services/produits.service';

@Component({
  selector: 'app-personnage-create',
  templateUrl: './personnage-create.component.html',
  styleUrls: ['./personnage-create.component.css']
})
export class PersonnageCreateComponent {
  icone! : File
  image! : File

  armesListe:Armes[] = []
  produitsListe : Produits[] = []
  matAmeliorationPersonnagesListe: MateriauxAmeliorationPersonnages[] = []

  personnagesFormGroup! : FormGroup


  constructor(private formBuilder:FormBuilder,private personnagesService:PersonnagesService,
              private produitsService:ProduitsService,private matAmeliorationService:MateriauxAmeliorationPersonnagesService,private armesService:ArmesService,private route:Router){}
  ngOnInit() {
    this.armesService.getAll().subscribe((data) => this.armesListe = data)
    this.produitsService.getAll().subscribe((data) => this.produitsListe = data)
    this.matAmeliorationService.getAll().subscribe((data) => this.matAmeliorationPersonnagesListe = data)

    this.personnagesFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      oeilDivin: ['', Validators.required],
      typeArme: ['',Validators.required],
      lore: ['', Validators.required],
      nationalite: ['', Validators.required],
      trailerYT: ['', Validators.required],
      dateSortie: ['', Validators.required],
      armeId: ['', Validators.required],
      materiauxAmeliorationPersonnageId: ['', Validators.required],
      produitId: ['', Validators.required],
      rarete: ['', Validators.required]
    })
  }

  loadIcone(e: any) {
    this.icone = e.target.files[0]
  }

  loadImage(e:any){
    this.image = e.target.files[0]
  }

  onSubmit() {    
     if(this.icone)    
       this.personnagesService.create(this.icone,this.image,this.personnagesFormGroup.value)
  }
}

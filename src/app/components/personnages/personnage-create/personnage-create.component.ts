import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-personnage-create',
  templateUrl: './personnage-create.component.html',
  styleUrls: ['./personnage-create.component.css']
})
export class PersonnageCreateComponent {
  icone! : File
  image! : File
  personnagesFormGroup! : FormGroup

  constructor(private formBuilder:FormBuilder,private personnagesService:PersonnagesService,private route:Router){}

  ngOnInit() {
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

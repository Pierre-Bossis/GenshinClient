import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriauxAmeliorationPersonnagesEtArmesService } from 'src/app/_services/materiaux-amelioration-personnages-et-armes.service';

@Component({
  selector: 'app-materiaux-amelioration-personnages-et-armes-create',
  templateUrl: './materiaux-amelioration-personnages-et-armes-create.component.html',
  styleUrls: ['./materiaux-amelioration-personnages-et-armes-create.component.css']
})
export class MateriauxAmeliorationPersonnagesEtArmesCreateComponent {
  myFile? : File
  matAmelioPersoArmesFormGroup! : FormGroup

  constructor(private formBuilder:FormBuilder,private matService:MateriauxAmeliorationPersonnagesEtArmesService,private route:Router){}

  ngOnInit() {
    this.matAmelioPersoArmesFormGroup = this.formBuilder.group({
      nom: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
      source: ['', Validators.required],
      rarete: ['', Validators.required]
    })
  }

  loadFile(e: any) {
    this.myFile = e.target.files[0]
  }

  onSubmit() {
    if(this.myFile)    
      this.matService.create(this.myFile,this.matAmelioPersoArmesFormGroup.value)
  }
}

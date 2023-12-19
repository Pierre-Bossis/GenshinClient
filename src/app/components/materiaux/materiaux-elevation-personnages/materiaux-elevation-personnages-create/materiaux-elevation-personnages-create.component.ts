import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriauxElevationPersonnagesService } from 'src/app/_services/materiaux-elevation-personnages.service';

@Component({
  selector: 'app-materiaux-elevation-personnages-create',
  templateUrl: './materiaux-elevation-personnages-create.component.html',
  styleUrls: ['./materiaux-elevation-personnages-create.component.css']
})
export class MateriauxElevationPersonnagesCreateComponent {
  myFile? : File
  matElevationPersoFormGroup! : FormGroup

  constructor(private formBuilder:FormBuilder,private matService:MateriauxElevationPersonnagesService){}

  ngOnInit() {
    this.matElevationPersoFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      source: ['', Validators.required],
      rarete: ['', Validators.required]
    })
  }

  loadFile(e: any) {
    this.myFile = e.target.files[0]
  }

  onSubmit() {
    if(this.myFile)    
      this.matService.create(this.myFile,this.matElevationPersoFormGroup.value)
  }
}

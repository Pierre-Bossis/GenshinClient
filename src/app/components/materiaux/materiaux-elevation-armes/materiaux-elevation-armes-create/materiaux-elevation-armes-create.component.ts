  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
  import { MateriauxElevationArmesService } from 'src/app/_services/materiaux-elevation-armes.service';

  @Component({
    selector: 'app-materiaux-elevation-armes-create',
    templateUrl: './materiaux-elevation-armes-create.component.html',
    styleUrls: ['./materiaux-elevation-armes-create.component.css']
  })
  export class MateriauxElevationArmesCreateComponent {
    myFile? : File
    myFormGroup! : FormGroup

    constructor(private formBuilder:FormBuilder,private matService:MateriauxElevationArmesService,private route:Router){}

    ngOnInit() {
      this.myFormGroup = this.formBuilder.group({
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
        this.matService.create(this.myFile,this.myFormGroup.value)
    }

  }

  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
  import { MateriauxElevationArmesService } from 'src/app/_services/materiaux-elevation-armes.service';

  @Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
  })
  export class CreateComponent {
    myFile? : File
    myFormGroup! : FormGroup

    constructor(private formBuilder:FormBuilder,private matService:MateriauxElevationArmesService,private route:Router){}

    ngOnInit() {
      this.myFormGroup = this.formBuilder.group({
        nom: ['', Validators.required],
        icone: [''],
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
        this.route.navigate(["home"])
    }

  }

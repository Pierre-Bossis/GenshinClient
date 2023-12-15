import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';

@Component({
  selector: 'app-materiaux-amelioration-personnages-create',
  templateUrl: './materiaux-amelioration-personnages-create.component.html',
  styleUrls: ['./materiaux-amelioration-personnages-create.component.css']
})
export class MateriauxAmeliorationPersonnagesCreateComponent {
  myFile? : File
  matAmelioPersoFormGroup! : FormGroup

  constructor(private formBuilder:FormBuilder,private matService:MateriauxAmeliorationPersonnagesService,private route:Router){}

  ngOnInit() {
    this.matAmelioPersoFormGroup = this.formBuilder.group({
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
      this.matService.create(this.myFile,this.matAmelioPersoFormGroup.value)
  }
}

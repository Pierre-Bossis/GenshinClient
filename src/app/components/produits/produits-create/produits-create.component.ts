import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/_services/produits.service';

@Component({
  selector: 'app-produits-create',
  templateUrl: './produits-create.component.html',
  styleUrls: ['./produits-create.component.css']
})
export class ProduitsCreateComponent {
  myFile? : File
  produitsFormGroup! : FormGroup

  constructor(private formBuilder:FormBuilder,private produitsService:ProduitsService,private route:Router){}

  ngOnInit() {
    this.produitsFormGroup = this.formBuilder.group({
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
      this.produitsService.create(this.myFile,this.produitsFormGroup.value)
  }
}

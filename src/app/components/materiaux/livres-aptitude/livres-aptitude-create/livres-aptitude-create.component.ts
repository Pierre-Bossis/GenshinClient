import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivresAptitudeService } from 'src/app/_services/livres-aptitude.service';

@Component({
  selector: 'app-livres-aptitude-create',
  templateUrl: './livres-aptitude-create.component.html',
  styleUrls: ['./livres-aptitude-create.component.css']
})
export class LivresAptitudeCreateComponent {
  myFile? : File
  livresAptitudeFormGroup! : FormGroup

  constructor(private formBuilder:FormBuilder,private livresService:LivresAptitudeService,private route:Router){}

  ngOnInit() {
    this.livresAptitudeFormGroup = this.formBuilder.group({
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
      this.livresService.create(this.myFile,this.livresAptitudeFormGroup.value)
  }
}

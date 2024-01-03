import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtefactsService } from 'src/app/_services/artefacts.service';

@Component({
  selector: 'app-artefacts-create',
  templateUrl: './artefacts-create.component.html',
  styleUrls: ['./artefacts-create.component.css']
})
export class ArtefactsCreateComponent {
  myFile? : File
  artefactsFormGroup! : FormGroup

  constructor(private formBuilder:FormBuilder,private artefactsService:ArtefactsService){}

  ngOnInit() {
    this.artefactsFormGroup = this.formBuilder.group({
      nom: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
      nomSet: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
      type: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
      bonus2pieces: ['', [Validators.required,Validators.minLength(2)]],
      bonus4pieces: ['', [Validators.required,Validators.minLength(2)]],
      source: ['',[Validators.required,Validators.minLength(2)]]
    })
  }

  loadFile(e: any) {
    this.myFile = e.target.files[0]
  }

  onSubmit() {
    if(this.myFile)    
      this.artefactsService.create(this.myFile,this.artefactsFormGroup.value)
  }
}

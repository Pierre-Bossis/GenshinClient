import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Personnages } from 'src/app/_models/personnages';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-constellations-create',
  templateUrl: './constellations-create.component.html',
  styleUrls: ['./constellations-create.component.css']
})
export class ConstellationsCreateComponent {
  personnageId!:number
  myFile? : File
  constellationsFormGroup! : FormGroup


  constructor(private formBuilder:FormBuilder,private personnagesService:PersonnagesService,private route:ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.personnageId = parseInt(idParam, 10);
      }
    });

    this.constellationsFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      personnage_Id: [this.personnageId,Validators.required]
    })
    
  }

  loadFile(e: any) {
    this.myFile = e.target.files[0]
  }

  onSubmit() {
    if(this.myFile)    
      this.personnagesService.createConstellation(this.myFile,this.constellationsFormGroup.value)
  }
}

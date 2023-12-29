import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-constellations-create',
  templateUrl: './constellations-create.component.html',
  styleUrls: ['./constellations-create.component.css']
})
export class ConstellationsCreateComponent {
  @Input() PersonnageId!: number
  @Output() constellationCreated: EventEmitter<any> = new EventEmitter();
  
  myFile? : File
  constellationsFormGroup! : FormGroup


  constructor(private formBuilder:FormBuilder,private personnagesService:PersonnagesService,private route:ActivatedRoute){}

  ngOnInit() {
    this.constellationsFormGroup = this.formBuilder.group({
      nom: ['', [Validators.required,Validators.minLength(2)]],
      description: ['', Validators.required],
      personnage_Id: [this.PersonnageId,Validators.required]
    })
    
  }

  loadFile(e: any) {
    this.myFile = e.target.files[0]
  }

  onSubmit() {
    if(this.myFile)    
      this.personnagesService.createConstellation(this.myFile,this.constellationsFormGroup.value).subscribe(() => {
        // Émettre un signal pour indiquer la création d'une nouvelle aptitude
        this.constellationCreated.emit();
      });
  }
}

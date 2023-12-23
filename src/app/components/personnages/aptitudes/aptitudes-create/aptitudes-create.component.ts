import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-aptitudes-create',
  templateUrl: './aptitudes-create.component.html',
  styleUrls: ['./aptitudes-create.component.css']
})
export class AptitudesCreateComponent {
  @Input() PersonnageId!: number
  @Output() aptitudeCreated: EventEmitter<any> = new EventEmitter();
  
  myFile? : File
  AptitudesFormGroup! : FormGroup


  constructor(private formBuilder:FormBuilder,private personnagesService:PersonnagesService,private route:ActivatedRoute){}

  ngOnInit() {
    this.AptitudesFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      isAptitudeCombat: [false,Validators.required],
      personnage_Id: [this.PersonnageId,Validators.required]
    })
    
  }

  loadFile(e: any) {
    this.myFile = e.target.files[0]
  }

  onSubmit() {
    if(this.myFile)    
      this.personnagesService.createAptitudes(this.myFile,this.AptitudesFormGroup.value).subscribe(() => {
        // Émettre un signal pour indiquer la création d'une nouvelle aptitude
        this.aptitudeCreated.emit();
      });
  }
}

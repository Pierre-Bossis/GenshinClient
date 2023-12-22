import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriauxAmeliorationPersonnagesEtArmes } from 'src/app/_models/materiaux-amelioration-personnages-et-armes';
import { MateriauxElevationArmes } from 'src/app/_models/materiaux-elevation-armes';
import { ArmesService } from 'src/app/_services/armes.service';
import { MateriauxAmeliorationPersonnagesEtArmesService } from 'src/app/_services/materiaux-amelioration-personnages-et-armes.service';
import { MateriauxElevationArmesService } from 'src/app/_services/materiaux-elevation-armes.service';

@Component({
  selector: 'app-armes-create',
  templateUrl: './armes-create.component.html',
  styleUrls: ['./armes-create.component.css']
})
export class ArmesCreateComponent {
  icone!: File
  image!: File

  matListe: MateriauxElevationArmes[] = []
  matAmelioListe: MateriauxAmeliorationPersonnagesEtArmes[] = []

  armesFormGroup!: FormGroup

  constructor(private formBuilder: FormBuilder, private armesService: ArmesService, private matElevationArmeService: MateriauxElevationArmesService, private matAmeliorationService:MateriauxAmeliorationPersonnagesEtArmesService,
              private route: Router) { }
  ngOnInit() {
    this.matElevationArmeService.getAll().subscribe((data) => this.matListe = data)
    this.matAmeliorationService.getAll().subscribe((data) => this.matAmelioListe = data)

    this.armesFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      typeArme: ['', Validators.required],
      description: ['', Validators.required],
      nomStatPrincipale: ['', Validators.required],
      valeurStatPrincipale: ['', Validators.required],
      effetPassif: ['', Validators.required],
      atqBase: ['', Validators.required],
      rarete: ['', Validators.required],
      selectedMats: ['',Validators.required],
      selectedMatsAmelio: ['', Validators.required]
    })    
  }

  loadIcone(e: any) {
    this.icone = e.target.files[0]
  }

  loadImage(e: any) {
    this.image = e.target.files[0]
  }

  onSubmit() {
    if (this.icone)
      this.armesService.create(this.icone, this.image, this.armesFormGroup.value)
  }

}

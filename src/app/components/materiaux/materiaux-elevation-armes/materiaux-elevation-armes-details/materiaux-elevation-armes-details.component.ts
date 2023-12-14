import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriauxElevationArmes } from 'src/app/_models/materiaux-elevation-armes';
import { MateriauxElevationArmesService } from 'src/app/_services/materiaux-elevation-armes.service';

@Component({
  selector: 'app-materiaux-elevation-armes-details',
  templateUrl: './materiaux-elevation-armes-details.component.html',
  styleUrls: ['./materiaux-elevation-armes-details.component.css']
})
export class MateriauxElevationArmesDetailsComponent implements OnInit {
  materiauxName: string | null = null
  materiaux!:MateriauxElevationArmes
  constructor(private matService: MateriauxElevationArmesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.materiauxName = params.get('name');      
    });

    if(this.materiauxName != null)
    {      
      this.matService.getByName(this.materiauxName).subscribe((data) =>{        
        this.materiaux = data
      })      
    }
  }
}

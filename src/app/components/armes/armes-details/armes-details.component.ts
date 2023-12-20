import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Armes } from 'src/app/_models/armes';
import { MateriauxElevationArmes } from 'src/app/_models/materiaux-elevation-armes';
import { ArmesService } from 'src/app/_services/armes.service';

@Component({
  selector: 'app-armes-details',
  templateUrl: './armes-details.component.html',
  styleUrls: ['./armes-details.component.css']
})
export class ArmesDetailsComponent {
arme!:Armes
materiauxElevationArmes:MateriauxElevationArmes[] = []
armeName:string | null = null
constructor(private armesService:ArmesService, private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.armeName = params.get('name');      
  });

  if(this.armeName != null)
  {      
    this.armesService.getByName(this.armeName).subscribe((data) =>{
      this.arme = data.arme
      this.materiauxElevationArmes = data.matsElevationArmes
          
    })      
  }
}
}

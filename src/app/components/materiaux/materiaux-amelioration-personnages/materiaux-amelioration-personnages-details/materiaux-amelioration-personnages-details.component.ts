import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriauxAmeliorationPersonnages } from 'src/app/_models/materiaux-amelioration-personnages';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';

@Component({
  selector: 'app-materiaux-amelioration-personnages-details',
  templateUrl: './materiaux-amelioration-personnages-details.component.html',
  styleUrls: ['./materiaux-amelioration-personnages-details.component.css']
})
export class MateriauxAmeliorationPersonnagesDetailsComponent {
  materiauxName: string | null = null
  materiaux!:MateriauxAmeliorationPersonnages
  constructor(private matService: MateriauxAmeliorationPersonnagesService, private route: ActivatedRoute) { }

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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artefacts } from 'src/app/_models/artefacts';
import { ArtefactsService } from 'src/app/_services/artefacts.service';

@Component({
  selector: 'app-artefacts-details',
  templateUrl: './artefacts-details.component.html',
  styleUrls: ['./artefacts-details.component.css']
})
export class ArtefactsDetailsComponent implements OnInit {
  nomSet:string|null = null
  artefactFlower!:Artefacts
  artefactsListe:Artefacts[] = []
  constructor(private route:ActivatedRoute, private artefactService:ArtefactsService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nomSet = params.get('name');      
    });

    if(this.nomSet != null)    
      this.artefactService.getBySet(this.nomSet).subscribe((data) => {
        this.artefactsListe = data
        this.artefactFlower = data.find((item: Artefacts) => item.type === 'Fleur');
        console.log(this.artefactFlower);
                
      })
  }
}

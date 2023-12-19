import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LivresAptitude } from 'src/app/_models/livres-aptitude';
import { LivresAptitudeService } from 'src/app/_services/livres-aptitude.service';

@Component({
  selector: 'app-livres-aptitude-liste',
  templateUrl: './livres-aptitude-liste.component.html',
  styleUrls: ['./livres-aptitude-liste.component.css']
})
export class LivresAptitudeListeComponent {
  livres:LivresAptitude[] = []
  constructor(private livresService:LivresAptitudeService, private route:Router){}
  ngOnInit(): void {
    this.livresService.getAll().subscribe((data)=>{
      this.livres = data      
    }) 
  }
  
  goDetails(nom:string){
    this.route.navigate(["livres-aptitude/"+nom])
  }
}

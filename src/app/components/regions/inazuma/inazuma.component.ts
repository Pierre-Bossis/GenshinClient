import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personnages } from 'src/app/_models/personnages';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-inazuma',
  templateUrl: './inazuma.component.html',
  styleUrls: ['./inazuma.component.css']
})
export class InazumaComponent {
  personnages:Personnages[] = []
  constructor(private personnagesService:PersonnagesService, private route:Router){}

  ngOnInit(): void {
    this.personnagesService.getByNationalite("nationalite/inazuma").subscribe((data) => this.personnages = data)
  }

  goDetails(nom:string){
    this.route.navigate(["personnages/"+nom])
  }
}

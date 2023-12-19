import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personnages } from 'src/app/_models/personnages';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-sumeru',
  templateUrl: './sumeru.component.html',
  styleUrls: ['./sumeru.component.css']
})
export class SumeruComponent {
  personnages:Personnages[] = []
  constructor(private personnagesService:PersonnagesService, private route:Router){}

  ngOnInit(): void {
    this.personnagesService.getByNationalite("nationalite/sumeru").subscribe((data) => this.personnages = data)
  }

  goDetails(nom:string){
    this.route.navigate(["personnages/"+nom])
  }
}

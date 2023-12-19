import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnages } from 'src/app/_models/personnages';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-mondstat',
  templateUrl: './mondstat.component.html',
  styleUrls: ['./mondstat.component.css']
})
export class MondstatComponent implements OnInit {
personnages:Personnages[] = []
  constructor(private personnagesService:PersonnagesService, private route:Router){}

  ngOnInit(): void {
    this.personnagesService.getByNationalite("nationalite/mondstat").subscribe((data) => this.personnages = data)
  }

  goDetails(nom:string){
    this.route.navigate(["personnages/"+nom])
  }
}

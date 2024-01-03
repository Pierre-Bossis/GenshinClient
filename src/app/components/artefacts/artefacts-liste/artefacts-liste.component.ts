import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';
import { Artefacts } from 'src/app/_models/artefacts';
import { ArtefactsService } from 'src/app/_services/artefacts.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-artefacts-liste',
  templateUrl: './artefacts-liste.component.html',
  styleUrls: ['./artefacts-liste.component.css']
})
export class ArtefactsListeComponent implements OnInit {
  role! : string | undefined
  showTrigger: NgxPopperjsTriggers = NgxPopperjsTriggers.hover;
  popperPlacement: NgxPopperjsPlacements = NgxPopperjsPlacements.TOPEND
  artefactsListe:Artefacts[] = []
constructor(private authService:AuthService,private artefactService:ArtefactsService, private route:Router){}
  ngOnInit(): void {
    this.role = this.authService.connectedUser?.role
    this.artefactService.getAll().subscribe((data) => this.artefactsListe = data)
  }

  goDetails(nomSet:string){
    this.route.navigate(["artefacts/"+nomSet])
  }
}

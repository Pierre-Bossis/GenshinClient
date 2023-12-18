import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Personnages } from 'src/app/_models/personnages';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-personnage-details',
  templateUrl: './personnage-details.component.html',
  styleUrls: ['./personnage-details.component.css']
})
export class PersonnageDetailsComponent {
  personnage!:Personnages
  personnageName:string | null = null
  trailer!:SafeResourceUrl;

  constructor(private personnagesService:PersonnagesService, private route:ActivatedRoute,private sanitizer: DomSanitizer){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.personnageName = params.get('name');      
    });
  
    if(this.personnageName != null)
    {      
      this.personnagesService.getByName(this.personnageName).subscribe((data) =>{                        
        this.personnage = data
        this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.personnage.trailerYT);
      })      
    }
  }
}

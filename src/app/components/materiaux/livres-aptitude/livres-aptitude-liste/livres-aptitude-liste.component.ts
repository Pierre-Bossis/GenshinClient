import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LivresAptitude } from 'src/app/_models/livres-aptitude';
import { AuthService } from 'src/app/_services/auth.service';
import { LivresAptitudeService } from 'src/app/_services/livres-aptitude.service';

@Component({
  selector: 'app-livres-aptitude-liste',
  templateUrl: './livres-aptitude-liste.component.html',
  styleUrls: ['./livres-aptitude-liste.component.css']
})
export class LivresAptitudeListeComponent {
  role!:string | undefined
  livres:LivresAptitude[] = []
  livresFiltre:LivresAptitude[] = []
  constructor(private livresService:LivresAptitudeService, private route:Router,private authService:AuthService){}
  ngOnInit(): void {
    this.role = this.authService.connectedUser?.role

    this.livresService.getAll().subscribe((data)=>{
      this.livres = data
      this.livresFiltre = this.livres   
    }) 
  }
  
  goDetails(nom:string){
    this.route.navigate(["livres-aptitude/"+nom])
  }

  filtre(search: string) {    
    search = search?.trim() ?? null;

    if (search !== null && search !== '') {
      this.livresFiltre = this.livres.filter((livre: LivresAptitude) =>
        livre.nom.toLowerCase().includes(search!.toLowerCase())
      );      
    }
    else
      this.livresFiltre = this.livres
  }
}

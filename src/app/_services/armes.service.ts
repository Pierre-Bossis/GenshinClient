import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Armes, ArmesForm } from '../_models/armes';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class ArmesService {
  private url: string = environment.apiurl
  constructor(private http:HttpClient, private upload:UploadService,private route:Router) { }

  getAll():Observable<Armes[]>{
    return this.http.get<Armes[]>(this.url+"armes")
  }

  getByName(name:string):Observable<any>{
    return this.http.get<Armes>(this.url+"armes/"+name)
  }

  getById(id:number):Observable<any>{
    return this.http.get<Armes>(this.url+"armes/"+id)
  }

  create(icone:File,image:File,arme : ArmesForm){
    const newArme = this.upload.upload(icone,image)

    newArme.append('Nom',arme.nom)
    newArme.append('TypeArme',arme.typeArme)
    newArme.append('Description',arme.description)
    newArme.append('NomStatPrincipale',arme.nomStatPrincipale)

    const valeurString = arme.valeurStatPrincipale.toString().replace('.', ',');
    newArme.append('ValeurStatPrincipale',valeurString)

    newArme.append('EffetPassif',arme.effetPassif)
    newArme.append('ATQBase',arme.atqBase.toString())
    newArme.append('Rarete',arme.rarete.toString())
    
    this.http.post(this.url+"armes/create",newArme).subscribe({
      next: () => this.route.navigate(["armes/liste"]),
      error: (err) => console.error('Error creating arme:', err)
    })
  }
}

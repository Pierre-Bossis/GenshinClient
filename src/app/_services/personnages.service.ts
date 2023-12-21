import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Personnages, PersonnagesForm } from '../_models/personnages';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnagesService {
  private url: string = environment.apiurl
  constructor(private http:HttpClient, private upload:UploadService,private route:Router) { }

  getAll():Observable<Personnages[]>{
    return this.http.get<Personnages[]>(this.url+"personnages")
  }

  getByName(name:string):Observable<any>{
    return this.http.get<Personnages>(this.url+"personnages/"+name)
  }

  getByNationalite(nationalite:string):Observable<Personnages[]>{
    return this.http.get<Personnages[]>(this.url+"personnages/"+nationalite)
  }

  create(icone:File,image:File,personnage : PersonnagesForm){
    const newPersonnage = this.upload.upload(icone,image)

    newPersonnage.append('Nom',personnage.nom)
    newPersonnage.append('OeilDivin',personnage.oeilDivin)
    newPersonnage.append('TypeArme',personnage.typeArme)
    newPersonnage.append('Lore',personnage.lore)
    newPersonnage.append('Nationalite',personnage.nationalite)
    newPersonnage.append('TrailerYT',personnage.trailerYT)
    newPersonnage.append('DateSortie',personnage.dateSortie.toString())
    
    if(personnage.armeId != null)
      newPersonnage.append('Arme_Id',personnage.armeId.toString())

    newPersonnage.append('MateriauxAmeliorationPersonnage_Id',personnage.materiauxAmeliorationPersonnageId.toString())
    newPersonnage.append('Produit_Id',personnage.produitId.toString())
    newPersonnage.append('Rarete',personnage.rarete.toString())

    personnage.selectedLivres.forEach((livreId: number) => {
      newPersonnage.append('SelectedLivres[]', livreId.toString());
    });

    personnage.selectedMatsElevation.forEach((matElevId: number) => {
      newPersonnage.append('SelectedMatsElevation[]', matElevId.toString());
    });
    
    this.http.post(this.url+"personnages/create",newPersonnage).subscribe({
      next: () => this.route.navigate(["personnages/liste"]),
      error: (err) => console.error('Error creating personnage:', err)
    })
  }
}

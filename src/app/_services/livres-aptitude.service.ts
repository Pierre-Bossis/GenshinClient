import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { LivresAptitude, LivresAptitudeForm } from '../_models/livres-aptitude';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class LivresAptitudeService {
  url:string = environment.apiurl
  constructor(private http:HttpClient, private upload: UploadService, private route:Router) { }

  getAll(): Observable<LivresAptitude[]> {
    return this.http.get<LivresAptitude[]>(this.url + "livresaptitude")
  }

  getByName(name: string): Observable<any> {
    return this.http.get<LivresAptitude>(this.url + "livresaptitude/" + name)
  }

  getById(id:number): Observable<LivresAptitude> {
    return this.http.get<LivresAptitude>(this.url + "livresaptitude/" + id)
  }

  create(fileToUpload:File,produit: LivresAptitudeForm) {
    const newProduit = this.upload.upload(fileToUpload)

    newProduit.append('Nom',produit.nom)
    newProduit.append('Source',produit.source)
    newProduit.append('Rarete',produit.rarete.toString())
    
    this.http.post(this.url+'livresaptitude/create', newProduit).subscribe({
      next: () => this.route.navigate(["livres-aptitude/liste"]),
      error: (err) => console.error('Error creating livres aptitude:', err)
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Produits, ProduitsForm } from '../_models/produits';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  url:string = environment.apiurl
  constructor(private http:HttpClient, private upload: UploadService, private route:Router) { }

  getAll(): Observable<Produits[]> {
    return this.http.get<Produits[]>(this.url + "produits")
  }

  getByName(name: string): Observable<any> {
    return this.http.get<Produits>(this.url + "produits/" + name)
  }

  getById(id:number): Observable<Produits> {
    return this.http.get<Produits>(this.url + "produits/" + id)
  }

  create(fileToUpload:File,produit: ProduitsForm) {
    const newProduit = this.upload.upload(fileToUpload)

    newProduit.append('Nom',produit.nom)
    newProduit.append('Source',produit.source)
    newProduit.append('Rarete',produit.rarete.toString())
    
    this.http.post(this.url+'produits/create', newProduit).subscribe({
      next: () => this.route.navigate(["produits/liste"]),
      error: (err) => console.error('Error creating produit:', err)
    })
  }

}

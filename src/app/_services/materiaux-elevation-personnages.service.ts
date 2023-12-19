import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { MateriauxElevationPersonnages, MateriauxElevationPersonnagesForm } from '../_models/materiaux-elevation-personnages';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class MateriauxElevationPersonnagesService {
  private url: string = environment.apiurl
  constructor(private http: HttpClient, private upload: UploadService, private route:Router) { }

  getAll(): Observable<MateriauxElevationPersonnages[]> {
    return this.http.get<MateriauxElevationPersonnages[]>(this.url + "materiauxelevationpersonnages")
  }

  getByName(name: string): Observable<any> {
    return this.http.get<any>(this.url + "materiauxelevationpersonnages/" + name)
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.url + "materiauxelevationpersonnages/" + id)
  }

  create(fileToUpload:File,mat: MateriauxElevationPersonnagesForm) {
    const newMat = this.upload.upload(fileToUpload)

    newMat.append('Nom',mat.nom)
    newMat.append('Source',mat.source)
    newMat.append('Rarete',mat.rarete.toString())
    
    this.http.post(this.url+'materiauxelevationpersonnages/create', newMat).subscribe({
      next: () => this.route.navigate(["materiaux-elevation-personnages/liste"]),
      error: (err) => console.error('Error creating materiauxelevationpersonnages:', err)
    })
  }
}

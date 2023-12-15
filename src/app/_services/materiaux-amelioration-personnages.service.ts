import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { MateriauxAmeliorationPersonnages, MateriauxAmeliorationPersonnagesForm } from '../_models/materiaux-amelioration-personnages';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class MateriauxAmeliorationPersonnagesService {
  private url: string = environment.apiurl
  constructor(private http: HttpClient, private upload: UploadService, private route:Router) { }

  getAll(): Observable<MateriauxAmeliorationPersonnages[]> {
    return this.http.get<MateriauxAmeliorationPersonnages[]>(this.url + "materiauxameliorationpersonnages")
  }

  getByName(name: string): Observable<any> {
    return this.http.get<any>(this.url + "materiauxameliorationpersonnages/" + name)
  }

  create(fileToUpload:File,mat: MateriauxAmeliorationPersonnagesForm) {
    const newMat = this.upload.upload(fileToUpload)

    newMat.append('Nom',mat.nom)
    newMat.append('Source',mat.source)
    newMat.append('Rarete',mat.rarete.toString())
    
    this.http.post(this.url+'materiauxameliorationpersonnages/create', newMat).subscribe({
      next: () => this.route.navigate(["materiaux-amelioration-personnages/liste"]),
      error: (err) => console.error('Error creating MateriauxAmeliorationPersonnages:', err)
    })
  }
}

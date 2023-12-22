import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { MateriauxAmeliorationPersonnagesEtArmes, MateriauxAmeliorationPersonnagesEtArmesForm } from '../_models/materiaux-amelioration-personnages-et-armes';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class MateriauxAmeliorationPersonnagesEtArmesService {
  private url: string = environment.apiurl
  constructor(private http: HttpClient, private upload: UploadService, private route:Router) { }

  getAll(): Observable<MateriauxAmeliorationPersonnagesEtArmes[]> {
    return this.http.get<MateriauxAmeliorationPersonnagesEtArmes[]>(this.url + "materiauxameliorationpersonnagesetarmes")
  }

  getByName(name: string): Observable<MateriauxAmeliorationPersonnagesEtArmes> {
    return this.http.get<MateriauxAmeliorationPersonnagesEtArmes>(this.url + "materiauxameliorationpersonnagesetarmes/" + name)
  }

  getById(id:number): Observable<MateriauxAmeliorationPersonnagesEtArmes> {
    return this.http.get<MateriauxAmeliorationPersonnagesEtArmes>(this.url + "materiauxameliorationpersonnagesetarmes/" + id)
  }

  create(fileToUpload:File,mat: MateriauxAmeliorationPersonnagesEtArmesForm) {
    const newMat = this.upload.upload(fileToUpload)

    newMat.append('Nom',mat.nom)
    newMat.append('Source',mat.source)
    newMat.append('Rarete',mat.rarete.toString())
    
    this.http.post(this.url+'materiauxameliorationpersonnagesetarmes/create', newMat).subscribe({
      next: () => this.route.navigate(["materiaux-amelioration-personnages-et-armes/liste"]),
      error: (err) => console.error('Error creating materiauxameliorationpersonnagesetarmes:', err)
    })
  }
}
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MateriauxElevationArmes, MateriauxElevationArmesForm } from '../_models/materiaux-elevation-armes';
import { Router } from '@angular/router';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class MateriauxElevationArmesService {
  private url: string = environment.apiurl
  constructor(private client: HttpClient, private router: Router, private upload: UploadService) { }

  getAll(): Observable<MateriauxElevationArmes[]> {
    return this.client.get<MateriauxElevationArmes[]>(this.url + "materiauxelevationarmes")
  }

  getByName(name: string): Observable<any> {
    return this.client.get<any>(this.url + "materiauxelevationarmes/" + name)
  }

  create(fileToUpload:File,mat: MateriauxElevationArmesForm) {
    const newMat = this.upload.upload(fileToUpload)

    newMat.append('Nom',mat.nom)
    newMat.append('Source',mat.source)
    newMat.append('Rarete',mat.rarete.toString())
    
    this.client.post(this.url+'materiauxelevationarmes/create', newMat).subscribe({
      //  next: () => this.router.navigate(["home"]),
      error: (err) => console.error('Error creating MateriauxElevationArmes:', err)
    });
  };
  
}

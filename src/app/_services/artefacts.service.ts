import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Artefacts, ArtefactsForm } from '../_models/artefacts';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class ArtefactsService {
  url:string = environment.apiurl
  constructor(private client:HttpClient,private upload: UploadService, private route:Router) { }

  getAll():Observable<Artefacts[]>{
    return this.client.get<Artefacts[]>(this.url + "artefacts")
  }

  getBySet(nomset:string):Observable<any>{
    return this.client.get<Artefacts[]>(this.url + "artefacts/" + nomset)
  }

  create(fileToUpload:File,artefact: ArtefactsForm) {
    const newArtefact = this.upload.upload(fileToUpload)

    newArtefact.append('Nom',artefact.nom)
    newArtefact.append('NomSet',artefact.nomSet)
    newArtefact.append('Type',artefact.type)
    newArtefact.append('Bonus2Pieces',artefact.bonus2Pieces)
    newArtefact.append('Bonus4Pieces',artefact.bonus4Pieces)
    newArtefact.append('Source',artefact.source)
    
    this.client.post(this.url+'artefacts/create', newArtefact).subscribe({
      next: () => this.route.navigate(["artefacts/liste"]),
      error: (err) => console.error('Error creating artefacts:', err)
    })
  }
}

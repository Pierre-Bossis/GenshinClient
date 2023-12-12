import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MateriauxElevationArmes } from '../_models/materiaux-elevation-armes';

@Injectable({
  providedIn: 'root'
})
export class MateriauxElevationArmesService {
  private url: string = environment.apiurl
  constructor(private client: HttpClient) { }

  getAll(): Observable<MateriauxElevationArmes[]> {
    return this.client.get<MateriauxElevationArmes[]>(this.url + "materiauxelevationarmes")
    console.log("t");
    
  }
}

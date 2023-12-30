import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Avatars } from '../_models/avatars';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private client:HttpClient) { }
  url:string = environment.apiurl

  getAll():Observable<Avatars[]>{
    return this.client.get<Avatars[]>(this.url + "avatars")
  }

  getById(id:number):Observable<Avatars>{
    return this.client.get<Avatars>(this.url + "avatars/" + id)
  }

  changeAvatar(avatarId:number,userId:string|undefined){   
    return this.client.patch(this.url + "avatars", {avatarId,userId}).subscribe()
  }
}

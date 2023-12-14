import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private client:HttpClient) { }

  upload(fileToUpload : File){
    let formData : FormData = new FormData()
    formData.append('myfile', fileToUpload, fileToUpload.name)
    return formData
  }

  //   byteArrayToImageUrl(byteArray: Uint8Array): string {
  //     //transformer en base64 DEPUIS LE BACK
  //   const blob = new Blob([byteArray], { type: 'image/jpeg' });
  //   return URL.createObjectURL(blob);
  // }
}

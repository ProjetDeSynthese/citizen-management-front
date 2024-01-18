import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { routesApi } from '../core/config';

@Injectable({
     providedIn: 'root',
})
export class FileUploadService {
     constructor(private http: HttpClient) {}
     readonly API_URL = routesApi.UPLOAD

     // Fonction pour uploader un fichier
     uploadFile(file: File): Observable<any> {
          const formData: FormData = new FormData();
          formData.append('file', file);

          // Remplacez 'YOUR_UPLOAD_API_URL' par l'URL de votre API de gestion de fichiers
          return this.http.post(this.API_URL.SAVE, formData);
     }

     // Fonction pour extraire le nom et le type du fichier
     extractFileInfo(file: File): { name: string; type: string } {
          return { name: file.name, type: file.type };
     }
}

import { Injectable } from '@angular/core';
import { Secteur } from '../interfaces/secteur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routesApi } from '../core/config';

@Injectable({
     providedIn: 'root',
})
export class SecteurService {
     readonly API_URL = routesApi.SECTEUR;
     constructor(private http: HttpClient) {}

     public record(data: Secteur) {
          return this.http.post(this.API_URL.SAVE, data);
     }

     public findAll(): Observable<Secteur[]> {
          return this.http.get<Secteur[]>(this.API_URL.FIND_ALL);
     }
     
     public delete(id:String){
          return this.http.delete(this.API_URL.REMOVE+id)
        }
}

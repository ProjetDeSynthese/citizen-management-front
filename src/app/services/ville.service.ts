import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ville } from '../interfaces/ville';
import { routesApi } from '../core/config';
import { Commune } from '../interfaces/commune';

@Injectable({
     providedIn: 'root',
})
export class VilleService {
     readonly API_URL = routesApi.VILLE;
     constructor(private http: HttpClient) {}

     public record(data: Ville) {
          return this.http.post(this.API_URL.SAVE, data);
     }

     public findAll(): Observable<Ville[]> {
          return this.http.get<Ville[]>(this.API_URL.FIND_ALL);
     }
     

     public delete(id:String){
          return this.http.delete(this.API_URL.REMOVE+id)
        }

        public getAllCommune(id:String) : Observable<Commune[]>{
          return this.http.get<Commune[]>(this.API_URL.FIND_COMMUNE+id)
        }
}

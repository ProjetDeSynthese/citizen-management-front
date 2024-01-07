import { Injectable } from '@angular/core';
import { Departement } from '../interfaces/departement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { routesApi } from '../core/config';
import { Ville } from '../interfaces/ville';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  readonly API_URL = routesApi.DEPARTEMENT
  constructor(private http: HttpClient) { }


  public record(data :Departement){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<Departement[]>{
    return this.http.get<Departement[]>(this.API_URL.FIND_ALL)
  }
  
  public delete(id:String){
    return this.http.delete(this.API_URL.REMOVE+id)
  }

  public getALlVIlle(id:String): Observable<Ville[]> {
    return this.http.get<Ville[]>(this.API_URL.FIND_VILLE+id);
}
}

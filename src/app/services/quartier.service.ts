import { Injectable } from '@angular/core';
import { Quartier } from '../interfaces/quartier';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routesApi } from '../core/config';
import { Secteur } from '../interfaces/secteur';

@Injectable({
  providedIn: 'root'
})
export class QuartierService {

  readonly API_URL = routesApi.QUARTIER
  constructor(private http: HttpClient) { }


  public record(data :Quartier){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<Quartier[]>{
    return this.http.get<Quartier[]>(this.API_URL.FIND_ALL)
  }
 
  public delete(id:String){
    return this.http.delete(this.API_URL.REMOVE+id)
  }

  
}

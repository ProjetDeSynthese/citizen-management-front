import { Injectable } from '@angular/core';
import { Region } from '../interfaces/region';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routesApi } from '../core/config';
import { Departement } from '../interfaces/departement';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  readonly API_URL = routesApi.REGION
  constructor(private http: HttpClient) { }


  public record(data :Region){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<Region[]>{
    return this.http.get<Region[]>(this.API_URL.FIND_ALL)
  }
  public delete(id:String){
    return this.http.delete(this.API_URL.REMOVE+id)
  }

  public findAllDepartement(region:String) : Observable<Departement[]>{
    return this.http.get<Departement[]>(this.API_URL.FIND_DEPARTEMENT+region)
  }
}

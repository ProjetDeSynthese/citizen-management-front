import { Injectable } from '@angular/core';
import { Departement } from '../interfaces/departement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { routesApi } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  readonly API_URL = routesApi.COMMUNE
  constructor(private http: HttpClient) { }


  public record(data :Departement){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<Departement[]>{
    return this.http.get<Departement[]>(this.API_URL.FIND_ALL)
  }
}

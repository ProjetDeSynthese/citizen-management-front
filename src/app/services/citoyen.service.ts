import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citoyen } from '../interfaces/citoyen';
import { Observable } from 'rxjs';
import { routesApi } from '../core/config';


@Injectable({
  providedIn: 'root'
})
export class CitoyenService {

  readonly API_URL = routesApi.CITOYEN
  constructor(private http: HttpClient) { }


  public record(data :Citoyen){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<Citoyen[]>{
    return this.http.get<Citoyen[]>(this.API_URL.FIND_ALL)
  }
  public delete(id:String){
    return this.http.delete(this.API_URL.REMOVE+id)
  }
}

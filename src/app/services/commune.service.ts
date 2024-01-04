import { Commune } from './../interfaces/commune';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { routesApi } from '../core/config';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  readonly API_URL = routesApi.COMMUNE
  constructor(private http: HttpClient) { }


  public record(data :Commune){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<Commune[]>{
    return this.http.get<Commune[]>(this.API_URL.FIND_ALL)
  }
}

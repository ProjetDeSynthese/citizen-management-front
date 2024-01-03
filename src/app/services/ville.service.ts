import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { routesApi } from 'src/environments/environment';
import { Ville } from '../interfaces/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  readonly API_URL = routesApi.VILLE
  constructor(private http: HttpClient) { }


  public record(data :Ville){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<Ville[]>{
    return this.http.get<Ville[]>(this.API_URL.FIND_ALL)
  }
}

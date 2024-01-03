import { Injectable } from '@angular/core';
import { Habitat } from '../interfaces/habitat';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { routesApi } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabitatService {

  
  readonly API_URL = routesApi.HABITAT
  constructor(private http: HttpClient) { }


  public record(data :Habitat){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<Habitat[]>{
    return this.http.get<Habitat[]>(this.API_URL.FIND_ALL)
  }
}

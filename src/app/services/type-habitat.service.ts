import { Injectable } from '@angular/core';
import { TypeHabitat } from '../interfaces/type-habitat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routesApi } from '../core/config';

@Injectable({
  providedIn: 'root'
})
export class TypeHabitatService {

  readonly API_URL = routesApi.TYPE_HABITAT
  constructor(private http: HttpClient) { }


  public record(data :TypeHabitat){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<TypeHabitat[]>{
    return this.http.get<TypeHabitat[]>(this.API_URL.FIND_ALL)
  }
  public delete(id:String){
    return this.http.delete(this.API_URL.REMOVE+id)
  }
}

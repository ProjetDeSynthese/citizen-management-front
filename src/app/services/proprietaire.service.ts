import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { routesApi } from '../core/config';
import { Proprietaire } from '../interfaces/proprietaire';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  readonly API_URL = routesApi.PROPRIETAIRE
  constructor(private http: HttpClient) { }


  public record(data :Proprietaire){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<Proprietaire[]>{
    return this.http.get<Proprietaire[]>(this.API_URL.FIND_ALL)
  }
  
  public delete(id:String){
    return this.http.delete(this.API_URL.REMOVE+id)
  }

}

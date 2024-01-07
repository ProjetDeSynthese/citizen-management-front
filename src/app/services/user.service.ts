import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routesApi } from '../core/config';
import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL = routesApi.User
  constructor(private http: HttpClient) { }


  public record(data :User){
    return this.http.post(this.API_URL.SAVE,data) 
  }

  public findAll() : Observable<User[]>{
    return this.http.get<User[]>(this.API_URL.FIND_ALL)
  }
  public delete(id:String){
    return this.http.delete(this.API_URL.REMOVE+id)
  }
}

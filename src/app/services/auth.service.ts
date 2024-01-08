import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { routesApi } from '../core/config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly API_URL = routesApi.AUTH
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(this.API_URL.LOGIN, credentials);
  }

  setAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  removeAuthToken(): void {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }

  getAuthHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
 /*  getUserRole(): string | null {
    const token = this.getAuthToken();
    if (token) {
      try {
        const decodedToken: any = jwt_decode(token);
        const userRole = decodedToken.role; 
        return userRole;
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    return null;
  }
  getUsername(): string | null {
    const token = this.getAuthToken();
    if (token) {
      try {
        const decodedToken: any = jwt_decode(token);
        const username = decodedToken.username; 
        return username;
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    return null;
  } */
}

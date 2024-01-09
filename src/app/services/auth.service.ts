import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { routesApi } from '../core/config';
@Injectable({
     providedIn: 'root',
})
export class AuthService {
     readonly API_URL = routesApi.AUTH;
     constructor(private http: HttpClient) {}

     login(username: string, password: string): Observable<any> {
          const credentials = { username, password };
          return this.http.post(this.API_URL.LOGIN, credentials).pipe(map(res => {
            debugger
            // localStorage.setItem('token',res.token)
          }));
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

     private decodeJwtToken(token: string): any | null {
          const payloadBase64 = this.getJwtPayloadBase64(token);
          if (payloadBase64) {
               const payloadJson = new TextDecoder().decode(this.base64ToBytes(payloadBase64));
               const user = JSON.parse(payloadJson) as any;
               return user;
          }
          return null;
     }

     // Méthode pour extraire la partie payload d'un JWT token
     private getJwtPayloadBase64(token: string): string | null {
          try {
               return token.split('.')[1];
          } catch (error) {
               return null;
          }
     }

     // Méthode pour convertir une base64 en tableau d'octets (bytes)
     private base64ToBytes(base64: string): Uint8Array {
          const binaryString = window.atob(base64);
          const length = binaryString.length;
          const bytes = new Uint8Array(length);
          for (let i = 0; i < length; i++) {
               bytes[i] = binaryString.charCodeAt(i);
          }

          return bytes;
     }
}

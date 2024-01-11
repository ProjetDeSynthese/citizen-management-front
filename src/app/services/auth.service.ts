import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { routesApi } from '../core/config';
import { credentials, jwtTokenDecode } from '../interfaces/user';
@Injectable({
     providedIn: 'root',
})
export class AuthService {
     readonly API_URL = routesApi.AUTH;
     constructor(private http: HttpClient) {
          const access = this.getAuthToken();
          
          // const access =
          //      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpc3NhbWFuZWwwNUBnbWFpbC5jb20iLCJpYXQiOjE3MDQ4MjQ0MzAsImV4cCI6MTcwNDgyNDczMH0.YARZTQB117RDK2upmAwXCjXThiAcgalo6Hcg5v48BDI';

          if (access) {
               
               this.setUser(this.decodeJwtToken(access));
          }
     }
     user!: jwtTokenDecode | null;

     // token = {
     //      accessToken:
     //           'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpc3NhbWFuZWwwNUBnbWFpbC5jb20iLCJpYXQiOjE3MDQ4MjQ0MzAsImV4cCI6MTcwNDgyNDczMH0.YARZTQB117RDK2upmAwXCjXThiAcgalo6Hcg5v48BDI',
     //      role: '[ROLE_ADMIN]',
     // };

     login(username: string, password: string): Observable<credentials> {
          const credentials = { username, password };
          return this.http.post<credentials>(this.API_URL.LOGIN, credentials).pipe(
               tap(res => {
                    
                    this.setUser(this.decodeJwtToken(res.accessToken));
                    this.setAuthToken(res.accessToken);
                    this.setRole(res.role[0]);
               }),
          );
     }

     setRole(role: string) {
          localStorage.setItem('role', role);
     }
     getRole():string |null {
         return localStorage.getItem('role');
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

     private decodeJwtToken(token: string): jwtTokenDecode | null {
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

     private time(timestamp: number) {
          return new Date(timestamp * 1000); // * 1000 pour convertir en millisecondes
     }

     private setUser(user: null | jwtTokenDecode) {
          
          if (user) {
               const expDate = this.time(user.exp);
               const now: Date = new Date();

               // Comparez les dates
               if (now <= expDate) {
                    this.user = user;
               } else {
                    this.user = null;
               }
          } else {
               this.user = user;
          }
     }

     public getUser(): jwtTokenDecode | null {
          
          return this.user;
     }
}

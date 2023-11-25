import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root',
})
export class AuthService {
     constructor() {}

     private isauth: boolean = false;

     ongetIsauth() {
          return localStorage.getItem('isauth');
     }
     onPostIsauth(val: string) {
          localStorage.setItem('isauth', val);
     }
}

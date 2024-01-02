import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
     selector: 'app-login',
     templateUrl: './login.component.html',
     styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
     constructor(
          private router: Router,
          private authService: AuthService,
     ) {}

     loginForm: FormGroup = new FormGroup({
          username: new FormControl(null, [Validators.required]),
          password: new FormControl(null, [Validators.required]),
     });

     onSubmit() {
          // this.authService.onPostIsauth('true');
          this.router.navigateByUrl('/admin/useradd');
     }
}

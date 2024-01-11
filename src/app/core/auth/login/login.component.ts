import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Roles } from 'src/roles.citizen';

@Component({
     selector: 'app-login',
     templateUrl: './login.component.html',
     styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
     constructor(
          private router: Router,
          private authService: AuthService,
          private toastr: ToastrService,
     ) {}
     ngOnInit(): void {
          this.onform();
     }

     loginForm!: FormGroup;

     onform() {
          this.loginForm = new FormGroup({
               username: new FormControl(null, [Validators.required]),
               password: new FormControl(null, [Validators.required]),
          });
     }

     onSubmit() {
          const username = this.loginForm.value.username;
          const password = this.loginForm.value.password;

          this.authService.login(username, password).subscribe({
               next: res => {
                    this.toastr.success('connexion effectué', 'Success');

                    const role = res.role;

                    if (role === Roles.Admin) {
                         this.router.navigateByUrl('/admin');
                    } else if (role === Roles.Bailleur) {
                         this.router.navigateByUrl('/bailleur');
                    } else {
                         this.router.navigateByUrl('/citoyens-dashboard');
                    }
               },
               error: error => {
                    this.toastr.error("Erreur d'enregistrement", 'Error');
               },
          });
     }
}

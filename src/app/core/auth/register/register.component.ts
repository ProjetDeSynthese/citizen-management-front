import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Habitat } from 'src/app/interfaces/habitat';
import { User } from 'src/app/interfaces/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
     selector: 'app-register',
     templateUrl: './register.component.html',
     styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
     form!: FormGroup;

     constructor(
          private userService: UserService,
          private toastr: ToastrService,
          private formBuilder: FormBuilder,
          private router:Router
     ) {}
     ngOnInit(): void {
          this.onForm();
     }

     submit() {
          if (this.form) {
               var user: User = {
                    nom_prenom: this.form.value.name,
                    email: this.form.value.email,
                    username: this.form.value.email,
                    password: this.form.value.password,
                    role: this.form.value.role,
                    roleTem: this.form.value.role,
                    status: 'ACTIVE',
               };

               this.userService.record(user).subscribe({
                    next: res => {
                         this.form.reset();
                         this.toastr.success('Enregistrement effectué', 'Success');
                         this.router.navigateByUrl('/auth/connexion')
                    },
                    error: err => {
                         this.toastr.error("Erreur d'enregistrement", 'Error');
                    },
               });
          }
     }

     onForm() {
          this.form = new FormGroup({
               name: new FormControl('', [Validators.required]),
               email: new FormControl('', [Validators.required, Validators.email]),
               password: new FormControl('', [Validators.required]),
               role: new FormControl('', [Validators.required]),
          });
     }
}

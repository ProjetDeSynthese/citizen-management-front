import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Habitat } from 'src/app/interfaces/habitat';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {


  form!: FormGroup

  constructor(private userService: UserService, private toastr: ToastrService,private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.onForm()
  }
  

  submit() {
    if (this.form) {

      var user: User = {
        nom_prenom: this.form.value.name,
        email: this.form.value.email,
        username: this.form.value.email,
        password : this.form.value.name,
        role: this.form.value.role,
        status : "INACTIVE"

      }

      this.userService.record(user).subscribe({
        next : res=>{
          this.form.reset()
          this.toastr.success('Enregistrement effectué', 'Success');

        },
        error : err=>{
          this.toastr.error("Erreur d'enregistrement", 'Error');
        }
      });

    }
  }

  onForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
     // numero: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),

    })
  }

}

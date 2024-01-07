import { UserService } from './../../../services/user.service';
import { User } from './../../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Citoyen } from 'src/app/interfaces/citoyen';
import { Habitat } from 'src/app/interfaces/habitat';
import { CitoyenService } from 'src/app/services/citoyen.service';
import { HabitatService } from 'src/app/services/habitat.service';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.scss']
})
export class AddUtilisateurComponent implements OnInit {


  form!: FormGroup
  habitats!: Habitat[]

  constructor(private userService: UserService) {

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
        numero: this.form.value.numero,
        password : this.form.value.numero,
        role: this.form.value.role,
        
      }


      console.log(user)

      this.userService.record(user).subscribe({
        next : res=>{
          alert("cool")
        },
        error : err=>{
          alert("error")
          console.log(err)


        }
      });

    }
  }

  onForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      numero: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),

    })
  }

}

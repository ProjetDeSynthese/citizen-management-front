import { Citoyen } from './../../../interfaces/citoyen';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Habitat } from 'src/app/interfaces/habitat';
import { CitoyenService } from 'src/app/services/citoyen.service';
import { HabitatService } from 'src/app/services/habitat.service';

@Component({
  selector: 'app-add-citoyens',
  templateUrl: './add-citoyens.component.html',
  styleUrls: ['./add-citoyens.component.scss']
})
export class AddCitoyensComponent implements OnInit {


  form!: FormGroup
  habitats!: Habitat[]

  constructor(private citoyenService: CitoyenService, private habitatService: HabitatService) {

  }
  ngOnInit(): void {
    this.onForm()
    this.getAllHabitats()
  }
  getAllHabitats() {

    this.habitatService.findAll().subscribe({
      next: res => {
        this.habitats = res
      }
    })

  }

  submit() {
    if (this.form) {

      var citoyen: Citoyen = {
        name: this.form.value.name,
        prenom: this.form.value.prenom,
        sexe: this.form.value.sexe,
        email: this.form.value.email,
        situationMat: this.form.value.situationMat,
        phone: this.form.value.phone,
        nationalite: this.form.value.nationalite,
        profession: this.form.value.profession,
        numCni: this.form.value.numCni,

      }


      console.log(citoyen)

    }
  }

  onForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      situationMat: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      nationalite: new FormControl('', [Validators.required]),
      profession: new FormControl('', [Validators.required]),
      numCni: new FormControl('', [Validators.required]),
      // habitat: new FormControl('', [Validators.required]),

    })
  }

}

import { UserService } from './../../../services/user.service';
import { User } from './../../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Citoyen } from 'src/app/interfaces/citoyen';
import { Habitat } from 'src/app/interfaces/habitat';
import { CitoyenService } from 'src/app/services/citoyen.service';
import { HabitatService } from 'src/app/services/habitat.service';
import { ToastrService } from 'ngx-toastr';
import { Commune } from 'src/app/interfaces/commune';
import { CommuneService } from 'src/app/services/commune.service';

@Component({
     selector: 'app-add-utilisateur',
     templateUrl: './add-utilisateur.component.html',
     styleUrls: ['./add-utilisateur.component.scss'],
})
export class AddUtilisateurComponent implements OnInit {
     form!: FormGroup;
     habitats!: Habitat[];
     allCommune!: Commune[];

     constructor(
          private userService: UserService,
          private toastr: ToastrService,
          private communeService: CommuneService,
     ) {}
     ngOnInit(): void {
          this.onForm();
          this.onGetCommune();
     }

     submit() {
          if (this.form) {
               var user: User = {
                    nom_prenom: this.form.value.name,
                    email: this.form.value.email,
                    username: this.form.value.email,
                    password: this.form.value.name,
                    role: this.form.value.role,
                    roleTem: this.form.value.role,
                    status: 'ACTIVE',
                    commune: this.findCommuneById(this.form.value.commune),
               };

               this.userService.record(user).subscribe({
                    next: res => {
                         this.form.reset();
                         this.toastr.success('Enregistrement effectué', 'Success');
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
               commune: new FormControl('', [Validators.required]),
               role: new FormControl('', [Validators.required]),
          });
     }

     onGetCommune() {
          this.communeService.findAll().subscribe({
               next: res => {
                    this.allCommune = res;
               },
          });
     }

     findCommuneById(id: String): any {
          return this.allCommune.find(Iten => id === Iten.id);
     }
}

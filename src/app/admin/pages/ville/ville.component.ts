import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/interfaces/departement';
import { Ville } from 'src/app/interfaces/ville';
import { DepartementService } from 'src/app/services/departement.service';
import { VilleService } from 'src/app/services/ville.service';

@Component({
     selector: 'app-ville',
     templateUrl: './ville.component.html',
     styleUrls: ['./ville.component.scss'],
})
export class VilleComponent implements OnInit {

     form!: FormGroup;
     allDepartement!: Departement[];
     allVille!: Ville[];

     constructor(
          private depavitementService: DepartementService,
          private toastr: ToastrService,
          private villeService: VilleService,
     ) { }

     ngOnInit(): void {
          this.onVille();
          this.onForm();
          this.onGetDepartement();
     }

     onForm() {
          this.form = new FormGroup({
               name: new FormControl('', [Validators.required]),
               departement: new FormControl('', [Validators.required]),
          });
     }

     remove(arg: string | undefined) {
          if (arg)
               this.villeService.delete(arg).subscribe({
                    next: data => {
                         this.toastr.success('Suppression effectuée', 'Success');
                         this.onVille()
                         this.form.reset()
                    },
                    error: err => {
                         this.toastr.error("Erreur d'supression", 'Error');
                    }
               })
     }
     submit() {

          const departement = this.findDepartement(this.form.value.departement)

          if (departement) {
               var ville: Ville = {
                    name: this.form.value.name,
                    departement: departement,
               };
               this.villeService.record(ville).subscribe({
                    next: data => {
                         this.toastr.success('Enregistrement effectué', 'Success');
                         this.onVille();
                         this.form.reset()
                    },
                    error: error => {
                         this.toastr.error("Erreur d'enregistrement", 'Error');
                    },
               });
          }

     }

     onGetDepartement() {
          this.depavitementService.findAll().subscribe({
               next: res => {
                    this.allDepartement = res;
               },
          });
     }

     onVille() {
          this.villeService.findAll().subscribe({
               next: res => {
                    this.allVille = res;
               },
          });
     }

     findDepartement(id: String) {
          return this.allDepartement.find(departementIten => id === departementIten.id)
     }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { Commune } from 'src/app/interfaces/commune';
import { Quartier } from 'src/app/interfaces/quartier';
import { Secteur } from 'src/app/interfaces/secteur';
import { CommuneService } from 'src/app/services/commune.service';
import { QuartierService } from 'src/app/services/quartier.service';
import { SecteurService } from 'src/app/services/secteur.service';

@Component({
     selector: 'app-secteur',
     templateUrl: './secteur.component.html',
     styleUrls: ['./secteur.component.scss'],
})
export class SecteurComponent implements OnInit {
     form!: FormGroup;
     allSecteurs!: Secteur[];
     allQuatier!: Quartier[];

     constructor(
          private secteurSevce: SecteurService,
          //private toastr: ToastrService,
          private quartierService: QuartierService,
     ) { }

     ngOnInit(): void {
          this.onGetQuartier();
          this.onForm();
          this.onGetSecteur();
     }

     onForm() {
          this.form = new FormGroup({
               name: new FormControl('', [Validators.required]),
               quartier: new FormControl('', [Validators.required]),
               code: new FormControl('', [Validators.required]),
          });
     }

     submit() {

          const quartier = this.findQuartier(this.form.value.quartier)

          if (quartier) {
               var secteur: Secteur = {
                    name: this.form.value.name,
                    code: this.form.value.code,
                    quartier: quartier,
               };
               this.secteurSevce.record(secteur).subscribe({
                    next: data => {
                         //this.toastr.success('Enregistrement effectué', 'Success');
                         this.onGetSecteur();
                    },
                    error: error => {
                         //this.toastr.error("Erreur d'enregistrement", 'Error');
                    },
               });
          }

     }

     onGetQuartier() {
          this.quartierService.findAll().subscribe({
               next: res => {
                    this.allQuatier = res;
               },
          });
     }

     onGetSecteur() {
          this.secteurSevce.findAll().subscribe({
               next: res => {
                    this.allSecteurs = res;
               },
          });
     }

     remove(arg: string | undefined) {
          if (arg)
               this.secteurSevce.delete(arg).subscribe({
                    next: data => {
                         //   this.toastr.success('Enregistrement effectué', 'Success');
                         this.onGetSecteur()
                    },
                    error: err => {
                         console.error('There was an error!', err);
                         // this.toastr.error("Erreur d'enregistrement", 'Error');
                    }
               })
     }

     findQuartier(id: String) {
          return this.allQuatier.find(quartierIten => id === quartierIten.id)
     }
}

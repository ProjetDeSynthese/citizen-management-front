import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
          private toastr: ToastrService,
          private quartierService: QuartierService,
     ) {}

     ngOnInit(): void {
          this.onGetQuartier();
          this.onForm();
          this.onGetSecteur();
     }

     onForm() {
          this.form = new FormGroup({
               name: new FormControl('', [Validators.required]),
               quartier: new FormControl('', [Validators.required]),
          });
     }

     submit() {
          var secteur: Secteur = {
               name: this.form.value.name,
               quartier: this.form.value.quartier,
          };
          this.secteurSevce.record(secteur).subscribe({
               next: data => {
                    this.toastr.success('Enregistrement effectué', 'Success');
                    this.onGetSecteur();
               },
               error: error => {
                    this.toastr.error("Erreur d'enregistrement", 'Error');
               },
          });
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
}

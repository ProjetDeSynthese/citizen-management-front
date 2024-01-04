import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { Commune } from 'src/app/interfaces/commune';
import { Quartier } from 'src/app/interfaces/quartier';
import { CommuneService } from 'src/app/services/commune.service';
import { QuartierService } from 'src/app/services/quartier.service';

@Component({
     selector: 'app-quartier',
     templateUrl: './quartier.component.html',
     styleUrls: ['./quartier.component.scss'],
})
export class QuartierComponent implements OnInit {
     form!: FormGroup;
     allCommunes!: Commune[];
     allQuatier!: Quartier[];

     constructor(
          private communeService: CommuneService,
         // private toastr: ToastrService,
          private quartierService: QuartierService,
     ) {}

     ngOnInit(): void {
          this.onGetQuartier();
          this.onForm();
          this.onGetCommune();
     }

     onForm() {
          this.form = new FormGroup({
               name: new FormControl('', [Validators.required]),
               commune: new FormControl('', [Validators.required]),
               code: new FormControl('', [Validators.required]),
          });
     }

     remove(arg: string | undefined) {
          if (arg)
               this.quartierService.delete(arg).subscribe({
                    next: data => {
                         //   this.toastr.success('Enregistrement effectué', 'Success');
                         this.onGetQuartier()
                    },
                    error: err => {
                         console.error('There was an error!', err);
                         // this.toastr.error("Erreur d'enregistrement", 'Error');
                    }
               })
     }
     submit() {
          const commune = this.findCommune(this.form.value.commune)
          if (commune){
               var quartier: Quartier = {
                    name: this.form.value.name,
                    code: this.form.value.code,
                    commune: commune,
               };
               console.log(quartier)
                this.quartierService.record(quartier).subscribe({
                    next: data => {
                        // this.toastr.success('Enregistrement effectué', 'Success');
                         this.onGetQuartier();
                    },
                    error: error => {
                      //   this.toastr.error("Erreur d'enregistrement", 'Error');
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

     onGetCommune() {
          this.communeService.findAll().subscribe({
               next: res => {
                    this.allCommunes = res;
               },
          });
     }

     findCommune(id: String) {
          return this.allCommunes.find(communeIten => id === communeIten.id)
     }
}

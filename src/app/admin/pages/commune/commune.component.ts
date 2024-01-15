import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Commune } from 'src/app/interfaces/commune';
import { Ville } from 'src/app/interfaces/ville';
import { CommuneService } from 'src/app/services/commune.service';
import { VilleService } from 'src/app/services/ville.service';

@Component({
     selector: 'app-commune',
     templateUrl: './commune.component.html',
     styleUrls: ['./commune.component.scss'],
})
export class CommuneComponent implements OnInit {

     form!: FormGroup;
     allCommunes!: Commune[];

     constructor(private communeService: CommuneService, private toastr: ToastrService,) { }

     ngOnInit(): void {
          this.onGetCommune();
          this.onForm();
     }

     onForm() {
          this.form = new FormGroup({
               name: new FormControl('', [Validators.required]),
          });
     }
     remove(arg: string | undefined) {
          if (arg)
               this.communeService.delete(arg).subscribe({
                    next: data => {
                         this.toastr.success('Suppresion effectuée', 'Success');
                         this.onGetCommune()
                    },
                    error: err => {
                         this.toastr.error("Erreur d'enregistrement", 'Error');
                    }
               })
     }

     submit() {
          if (this.form.valid) {
               var commune: Commune = {
                    name: this.form.value.name,
               };
               this.communeService.record(commune).subscribe({
                    next: data => {
                         this.toastr.success('Enregistrement effectué', 'Success');
                         this.onGetCommune();
                         this.form.reset()
                    },
                    error: error => {
                         this.toastr.error("Erreur d'enregistrement", 'Error');
                         this.form.reset()
                    },
               });
          }
          else {
               this.toastr.error("Erreur d'enregistrement", 'Error');
          }

     }

     onGetCommune() {
          this.communeService.findAll().subscribe({
               next: res => {
                    this.allCommunes = res;
               },
          });
     }


}

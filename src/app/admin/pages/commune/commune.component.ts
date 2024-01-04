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
     allVille!: Ville[];

     constructor(
          private communeService: CommuneService,
          private toastr: ToastrService,
          private villeService: VilleService,
     ) {}

     ngOnInit(): void {
          this.onGetVille();
          this.onForm();
          this.onGetVille();
     }

     onForm() {
          this.form = new FormGroup({
               name: new FormControl('', [Validators.required]),
               ville: new FormControl('', [Validators.required]),
               code: new FormControl('', [Validators.required]),
          });
     }

     submit() {
          var commune: Commune = {
               name: this.form.value.name,
               ville: this.form.value.ville,
               code: this.form.value.code,
          };
          this.communeService.record(commune).subscribe({
               next: data => {
                    this.toastr.success('Enregistrement effectué', 'Success');
                    this.onGetCommune();
               },
               error: error => {
                    this.toastr.error("Erreur d'enregistrement", 'Error');
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

     onGetVille() {
          this.villeService.findAll().subscribe({
               next: res => {
                    this.allVille = res;
               },
          });
     }
}

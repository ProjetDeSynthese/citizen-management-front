import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/interfaces/departement';
import { Region } from 'src/app/interfaces/region';
import { DepartementService } from 'src/app/services/departement.service';
import { RegionService } from 'src/app/services/region.service';

@Component({
     selector: 'app-departement',
     templateUrl: './departement.component.html',
     styleUrls: ['./departement.component.scss'],
})
export class DepartementComponent implements OnInit {
     form!: FormGroup;
     allRegion!: Region[];
     allDepartement!: Departement[];

     constructor(
          private departementService: DepartementService,
          private toastr: ToastrService,
          private regionService: RegionService,
     ) {}

     ngOnInit(): void {
          this.onForm();
          this.onGetRegion();
          this.onGetDepartement();
     }

     onForm() {
          this.form = new FormGroup({
               name: new FormControl('', [Validators.required]),
               code: new FormControl('', [Validators.required]),
               region: new FormControl('', [Validators.required]),
          });
     }

     submit() {
          var departement: Departement = {
               code: this.form.value.code,
               name: this.form.value.name,
               region: this.form.value.region,
          };
          this.departementService.record(departement).subscribe({
               next: data => {
                    this.toastr.success('Enregistrement effectué', 'Success');
                    this.onGetDepartement();
               },
               error: error => {
                    console.error('There was an error!', error);
                    //alert('Erreur  survenue')
                    this.toastr.error("Erreur d'enregistrement", 'Error');
               },
          });
     }

     onGetRegion() {
          this.regionService.findAll().subscribe({
               next: res => {
                    this.allRegion = res;
               },
          });
     }

     onGetDepartement() {
          this.departementService.findAll().subscribe({
               next: res => {
                    this.allDepartement = res;
               },
          });
     }
}

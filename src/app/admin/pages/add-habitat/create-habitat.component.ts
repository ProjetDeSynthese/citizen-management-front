import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Commune } from 'src/app/interfaces/commune';
import { Departement } from 'src/app/interfaces/departement';
import { SidebarHabitat } from 'src/app/interfaces/habitat';
import { Quartier } from 'src/app/interfaces/quartier';
import { Region } from 'src/app/interfaces/region';
import { Secteur } from 'src/app/interfaces/secteur';
import { Ville } from 'src/app/interfaces/ville';
import { CommuneService } from 'src/app/services/commune.service';
import { DepartementService } from 'src/app/services/departement.service';
import { QuartierService } from 'src/app/services/quartier.service';
import { RegionService } from 'src/app/services/region.service';
import { SecteurService } from 'src/app/services/secteur.service';
import { VilleService } from 'src/app/services/ville.service';

@Component({
     selector: 'app-create-habitat',
     templateUrl: './create-habitat.component.html',
     styleUrls: ['./create-habitat.component.scss'],
})
export class CreateHabitatComponent implements OnInit {
   
     selectedFile: File | null = null;
     selectedFileSrc!: string;
     allRegion!: Region[];
     allDepart!: Departement[];
     allVille!: Ville[];
     allCommune!: Commune[];
     allQuartier!: Quartier[];
     allSecteur!: Secteur[];
     form!: FormGroup;
   

     constructor(
          private regionService: RegionService,
          private departService: DepartementService,
          private villeService: VilleService,
          private communeService: CommuneService,
          private quartierService: QuartierService,
          private secteurService: SecteurService,
     ) {}

     ngOnInit(): void {
          this.onRegion();
       
     }

     onform() {
          this.form = new FormGroup({
               region: new FormControl('', [Validators.required]),
               departement: new FormControl('', [Validators.required]),
               ville: new FormControl('', [Validators.required]),
               commune: new FormControl('', [Validators.required]),
               quartier: new FormControl('', [Validators.required]),
               secteur: new FormControl('', [Validators.required]),
          });
     }

     onRegion() {
          this.regionService.findAll().subscribe(data => {
               this.allRegion = data;
          });
     }




     onFiltreDepart(id: string | undefined) {
          if (id) {
               this.regionService.findAllDepartement(id).subscribe({
                    next: res => {
                         this.allDepart = res;
                    },
               });
          }
     }

     onFiltreVilles(id: string|undefined) {
     

          if (id) {
               this.departService.getALlVIlle(id).subscribe({
                    next: res => {
                         this.allVille = res;
                    },
               });
          }
     }

     onFiltreCommune(id: string|undefined) {
                 if (id) {
               this.villeService.getAllCommune(id).subscribe({
                    next: res => {
                         this.allCommune = res;
                    },
               });
          }
     }

     onFiltreQuartier(id: string|undefined) {
         

          if (id) {
               this.communeService.getAllCommune(id).subscribe({
                    next: res => {
                         this.allQuartier = res;
                    },
               });
          }
     }

     onFiltreSecteur(id: string|undefined) {
          
          if (id) {
               this.quartierService.getAllQuartier(id).subscribe({
                    next: res => {
                         this.allSecteur = res;
                    },
               });
          }
     }
}

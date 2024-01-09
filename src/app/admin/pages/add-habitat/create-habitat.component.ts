import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Commune } from 'src/app/interfaces/commune';
import { Departement } from 'src/app/interfaces/departement';
import { Habitat, SidebarHabitat } from 'src/app/interfaces/habitat';
import { Quartier } from 'src/app/interfaces/quartier';
import { Region } from 'src/app/interfaces/region';
import { Secteur } from 'src/app/interfaces/secteur';
import { Ville } from 'src/app/interfaces/ville';
import { CommuneService } from 'src/app/services/commune.service';
import { DepartementService } from 'src/app/services/departement.service';
import { HabitatService } from 'src/app/services/habitat.service';
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
     typeHabitat!: any;

     constructor(
          private regionService: RegionService,
          private departService: DepartementService,
          private villeService: VilleService,
          private communeService: CommuneService,
          private quartierService: QuartierService,
          private secteurService: SecteurService,
          private habitaService: HabitatService,
          private toastr: ToastrService,
     ) {}

     ngOnInit(): void {
          this.onform();
          this.onRegion();
     }

     onform() {
          this.form = new FormGroup({
               secteur: new FormControl('', [Validators.required]),
               prix: new FormControl('', [Validators.required]),
               type: new FormControl('', [Validators.required]),
               image: new FormControl('', [Validators.required]),
               description: new FormControl('', [Validators.required]),
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

     onFiltreVilles(id: string | undefined) {
          if (id) {
               this.departService.getALlVIlle(id).subscribe({
                    next: res => {
                         this.allVille = res;
                    },
               });
          }
     }

     onFiltreCommune(id: string | undefined) {
          if (id) {
               this.villeService.getAllCommune(id).subscribe({
                    next: res => {
                         this.allCommune = res;
                    },
               });
          }
     }

     onFiltreQuartier(id: string | undefined) {
          if (id) {
               this.communeService.getAllCommune(id).subscribe({
                    next: res => {
                         this.allQuartier = res;
                    },
               });
          }
     }

     onFiltreSecteur(id: string | undefined) {
          if (id) {
               this.quartierService.getAllQuartier(id).subscribe({
                    next: res => {
                         this.allSecteur = res;
                    },
               });
          }
     }
     onPost() {
          let habitat: Habitat = {
               description: this.form.value.description,
               proprietaire: '',
               latitude: 0.99,
               longitude: 22,
               secteur: this.form.value.secteur,
               image: this.form.value.image,
               typeHabitat: { name: 'ww' },
               prix: this.form.value.prix,
          };
          this.habitaService.record(habitat).subscribe({
               next: data => {
                    this.toastr.success('Enregistrement effectué', 'Success');
                    this.form.reset();
               },
               error: err => {
                    console.error('There was an error!', err);
                    this.toastr.error("Erreur d'enregistrement", 'Error');
               },
          });
     }
}

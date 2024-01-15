import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Commune } from 'src/app/interfaces/commune';
import { Departement } from 'src/app/interfaces/departement';
import { Habitat } from 'src/app/interfaces/habitat';
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
import * as L from 'leaflet';
import { TypeHabitat } from 'src/app/interfaces/type-habitat';
import { TypeHabitatService } from 'src/app/services/type-habitat.service';

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
     typeHabitat!: TypeHabitat[];
     allHabitat!: Habitat[];
     map!: L.Map;
     centroid: L.LatLngExpression = [42.3601, -71.0589];
     long: any;
     lat: any;

     constructor(
          private regionService: RegionService,
          private departService: DepartementService,
          private villeService: VilleService,
          private communeService: CommuneService,
          private quartierService: QuartierService,
          private secteurService: SecteurService,
          private habitaService: HabitatService,
          private toastr: ToastrService,
          private typeHabitatService: TypeHabitatService,
     ) {}

     ngOnInit(): void {
          this.onform();
          this.onRegion();
          this.initMap();
          this.onTypeHabitat();
     }

     onform() {
          this.form = new FormGroup({
               secteur: new FormControl('', [Validators.required]),
               prix: new FormControl('', [Validators.required]),
               type: new FormControl('', [Validators.required]),
               image: new FormControl('', [Validators.required]),
               description: new FormControl('', [Validators.required]),
               proprietaire: new FormControl('', [Validators.required]),
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

    
     onPost() {
          let habitat: Habitat = {
               description: this.form.value.description,
               proprietaire: this.form.value.proprietaire,
               latitude: this.lat,
               longitude: this.long,
               image: [''],
               typeHabitat: this.findTypeHabitat(this.form.value.type),
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
     findSecteurById(id: String): any {
          return this.allSecteur.find(Iten => id === Iten.id);
     }

     findTypeHabitat(id: String): any {
          return this.typeHabitat.find(Iten => id === Iten.id);
     }

     onTypeHabitat() {
          this.typeHabitatService.findAll().subscribe({
               next: res => {
                    this.typeHabitat = res;
               },
          });
     }

     private initMap(): void {
          // Initialiser la carte avec une vue par défaut
          this.map = L.map('map').setView([0, 0], 2);

          // Ajouter une couche de tuiles OpenStreetMap
          const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
               maxZoom: 18,
               minZoom: 2,
               attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap </a> ',
          });

          tiles.addTo(this.map);

          // Tableau de positions avec des coordonnées (latitude, longitude)
          const positions: L.LatLngExpression[] = [
               // Ajoutez d'autres positions ici...
               // [10.5931, 14.3262],
               // [10.7372, 10.7372],
               // [10.1095, 14.4469],
               // [11.0422, 14.1447],
               // [12.0783, 15.0308],
               // [10.9211, 14.385],
               // [10.2833, 14.1833],
               // [12.0638, 14.4308],
               // [10.7333, 14.5167],
               // [10.1625, 14.3328],
               // ... Ajoutez autant de positions que nécessaire
          ];

          // Créer un tableau de marqueurs pour chaque position
          const markers = positions.map(position => L.marker(position));

          // Ajouter les marqueurs à la carte
          markers.forEach(marker => marker.addTo(this.map));

          // Activer la localisation de l'utilisateur si le navigateur le prend en charge
          if ('geolocation' in navigator) {
               navigator.geolocation.getCurrentPosition(
                    position => {
                         const userPosition: L.LatLngExpression = [position.coords.latitude, position.coords.longitude];
                         this.long = position.coords.longitude;
                         this.lat = position.coords.latitude;
                         // Créer un marqueur pour la position de l'utilisateur
                         const userMarker = L.marker(userPosition).addTo(this.map);
                         userMarker.bindPopup('Votre position actuelle').openPopup();

                         // Centrer la carte sur la position de l'utilisateur
                         this.map.setView(userPosition, 12);
                    },
                    error => {
                         console.error('Error getting user location:', error);
                    },
               );
          }
     }

     //      getAllHabitats()
     //   {
     //     this.habibatService.findAll().subscribe({
     //       next : res=>{
     //         this.allHabitat = res
     //       }
     //     })
     //   }
}

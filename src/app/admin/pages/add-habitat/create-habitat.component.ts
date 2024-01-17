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
import { Proprietaire } from 'src/app/interfaces/proprietaire';
import { ProprietaireService } from 'src/app/services/proprietaire.service';

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
     allPropietaire!: Proprietaire[];

     constructor(
          private propietaireService: ProprietaireService,
          private quartierService: QuartierService,
          private habitaService: HabitatService,
          private toastr: ToastrService,
          private typeHabitatService: TypeHabitatService,
     ) {}

     ngOnInit(): void {
          this.onform();
          this.initMap();
          this.onTypeHabitat();
          this.onGetPropietaire();
          this.onGetQuartier();
     }

     onform() {
          this.form = new FormGroup({
               quartier: new FormControl('', [Validators.required]),
               prix: new FormControl('', [Validators.required]),
               type: new FormControl('', [Validators.required]),
               image: new FormControl('', [Validators.required]),
               description: new FormControl('', [Validators.required]),
               proprietaire: new FormControl('', [Validators.required]),
               statut: new FormControl('', [Validators.required]),
               chambre: new FormControl('', [Validators.required]),
               douche: new FormControl('', [Validators.required]),
               superficie: new FormControl('', [Validators.required]),
               parking: new FormControl('', [Validators.required]),
               video: new FormControl('', [Validators.required]),
          });
     }

     onFiltreQuartier(id: string | undefined) {
          if (id) {
               this.quartierService.findAll().subscribe({
                    next: res => {
                         this.allQuartier = res;
                    },
               });
          }
     }

     onPost() {
          let habitat: Habitat = {
               description: this.form.value.description,
               proprietaire: this.findPropieteById(this.form.value.proprietaire),
               latitude: this.lat,
               longitude: this.long,
               image: [''],
               typeMaison: this.findTypeHabitat(this.form.value.type),
               prix: this.form.value.prix,
               statut: this.form.value.statut,
               chambre: this.form.value.chambre,
               douche: this.form.value.douche,
               superficie: this.form.value.superficie,
               parking: this.form.value.parking,
               video: '',
               quartier: this.findQuartierById(this.form.value.quartier),
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

     findQuartierById(id: String): any {
          return this.allQuartier.find(Iten => id === Iten.id);
     }
     findPropieteById(id: String): any {
          return this.allPropietaire.find(Iten => id === Iten.id);
     }

     onTypeHabitat() {
          this.typeHabitatService.findAll().subscribe({
               next: res => {
                    this.typeHabitat = res;
               },
          });
     }

     onGetPropietaire() {
          this.propietaireService.findAll().subscribe({
               next: res => {
                    this.allPropietaire = res;
               },
          });
     }

     onGetQuartier() {
          this.quartierService.findAll().subscribe({
               next: res => {
                    this.allQuartier = res;
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
                         this.map.setView(userPosition, 14);
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

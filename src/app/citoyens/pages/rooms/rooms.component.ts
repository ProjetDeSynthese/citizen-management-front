import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Habitat } from 'src/app/interfaces/habitat';
import { HabitatService } from 'src/app/services/habitat.service';
@Component({
     selector: 'app-rooms',
     templateUrl: './rooms.component.html',
     styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {

     allHabitat! : Habitat[]
     map!: L.Map;
     centroid: L.LatLngExpression = [42.3601, -71.0589];
     constructor(private habibatService:HabitatService){}

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
               [10.5931, 14.3262],
               [10.7372, 10.7372],
               [10.1095, 14.4469],
               [11.0422, 14.1447],
               [12.0783, 15.0308],
               [10.9211, 14.385],
               [10.2833, 14.1833],
               [12.0638, 14.4308],
               [10.7333, 14.5167],
               [10.1625, 14.3328],
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

     ngOnInit() {
          // this.initializeMap();
          this.initMap();
     }
     getAllHabitats()
  {
    this.habibatService.findAll().subscribe({
      next : res=>{
        this.allHabitat = res
      }
    })
  }

 
}

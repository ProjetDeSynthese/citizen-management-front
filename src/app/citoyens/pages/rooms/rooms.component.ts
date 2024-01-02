import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
     selector: 'app-rooms',
     templateUrl: './rooms.component.html',
     styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
     map!: L.Map;

     ngOnInit() {
          this.initializeMap();
          // this.locateUser();
     }

     initializeMap() {
          this.map = L.map('map').setView([0, 0], 2); // La vue sera mise à jour une fois la géolocalisation effectuée
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
               attribution: '© OpenStreetMap contributors',
          }).addTo(this.map);
     }

//      locateUser() {
//           this.map.locate({ setView: true, maxZoom: 4 });
//           this.map.on('locationfound', (e: any) => {
//                const marker = L.marker([e.latitude, e.longitude]).addTo(this.map);
//                marker.bindPopup('Vous êtes ici !').openPopup();
//           });

//           this.map.on('locationerror', (e: any) => {
//                alert('Impossible de trouver votre emplacement. Assurez-vous que la géolocalisation est activée.');
//           });
//      }
}

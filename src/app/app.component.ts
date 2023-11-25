import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHeaderVisible!: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
       this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                 const url = event.url;

                 // Vérifiez si l'URL correspond à la page de connexion (login)
                 if (url.includes('auth/login')|| url.includes('**')) {
                      // Masquer l'en-tête lorsque la navigation vers la page de connexion est détectée
                      this.isHeaderVisible = false;
                 } else {
                      // Afficher l'en-tête pour les autres pages
                      this.isHeaderVisible = true;
                 }
            }
       });
  }
  title = 'projet-from-citoyens';
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BailleurDashboadRoutingModule } from './bailleur-dashboard-routing.module';
import { CreateHabitatComponent } from './pages/create-habitat/create-habitat.component';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { ListeHabitatComponent } from './pages/liste-habitat/liste-habitat.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FormsCreateHabitatComponent } from './compoments/forms-create-habitat/forms-create-habitat.component';
import { ViewDetailHabitatComponent } from './compoments/view-detail-habitat/view-detail-habitat.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
     declarations: [
          UtilisateurComponent,
          CreateHabitatComponent,
          DashbaordComponent,
          ListeHabitatComponent,
          HeaderComponent,
          FooterComponent,
          FormsCreateHabitatComponent,
          ViewDetailHabitatComponent,
          ProfileComponent,
     ],
     imports: [CommonModule, BailleurDashboadRoutingModule],
})
export class BailleurDashboardModule {}

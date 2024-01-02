import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { CreateHabitatComponent } from './pages/create-habitat/create-habitat.component';
import { ListeHabitatComponent } from './pages/liste-habitat/liste-habitat.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
     { path: '', component: DashbaordComponent },
     { path: 'create-habitat', component: CreateHabitatComponent },
     { path: 'list-habitat', component: ListeHabitatComponent },
     { path: 'user', component: UtilisateurComponent },
     { path: 'profile', component: ProfileComponent },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class BailleurDashboadRoutingModule {}

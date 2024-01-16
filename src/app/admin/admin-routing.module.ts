import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { DepartementComponent } from './pages/departement/departement.component';
import { RegionComponent } from './pages/region/region.component';
import { VilleComponent } from './pages/ville/ville.component';
import { QuartierComponent } from './pages/quartier/quartier.component';
import { SecteurComponent } from './pages/secteur/secteur.component';
import { CommuneComponent } from './pages/commune/commune.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './pages/add-utilisateur/add-utilisateur.component';
import { CreateHabitatComponent } from './pages/add-habitat/create-habitat.component';
import { ListeHabitatComponent } from './pages/liste-habitat/liste-habitat.component';
import { AddCitoyensComponent } from './pages/add-citoyens/add-citoyens.component';
import { AllCitoyensComponent } from './pages/all-citoyens/all-citoyens.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TypeHabitatComponent } from './pages/type-habitat/type-habitat.component';
import { ProprietaireComponent } from './pages/proprietaire/proprietaire.component';

const routes: Routes = [
     { path: '', component: DashbaordComponent },
     { path: 'commune', component: CommuneComponent },
     { path: 'quartier', component: QuartierComponent },
     { path: 'type-habitat', component: TypeHabitatComponent },
     { path: 'proprietaire', component: ProprietaireComponent },



     { path: 'add-citoyens', component: AddCitoyensComponent },
     { path: 'all-citoyens', component: AllCitoyensComponent },
     { path: 'all-users', component: AllUsersComponent },
     { path: 'departement', component: DepartementComponent },
     { path: 'region', component: RegionComponent },
     { path: 'ville', component: VilleComponent },
     { path: 'secteur', component: SecteurComponent },
     { path: 'user', component: UtilisateurComponent },
     { path: 'useradd', component: AddUtilisateurComponent },
     { path: 'create-habitat', component: CreateHabitatComponent },
     { path: 'list-habitat', component: ListeHabitatComponent },
     { path: 'profile', component: ProfileComponent },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class AdminRoutingModule {}

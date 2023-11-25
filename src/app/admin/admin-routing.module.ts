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

const routes: Routes = [
  { path: '', component: DashbaordComponent },
  { path: 'all-users', component: AllUsersComponent },
  { path: 'departement', component: DepartementComponent },
  { path: 'region', component: RegionComponent },
  { path: 'ville', component: VilleComponent },
  { path: 'commune', component: CommuneComponent },
  { path: 'secteur', component: SecteurComponent },
  { path: 'quartier', component: QuartierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

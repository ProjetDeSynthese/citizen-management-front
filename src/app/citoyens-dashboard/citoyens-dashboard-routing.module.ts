import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { ListeHabitatComponent } from './pages/liste-habitat/liste-habitat.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
     { path: '', component: DashbaordComponent },
     { path: 'list-habitat', component: ListeHabitatComponent },
     { path: 'profile', component: ProfileComponent },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class CitoyensDashboardRoutingModule {}

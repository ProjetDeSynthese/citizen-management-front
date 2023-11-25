import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { CreateHabitatComponent } from './pages/create-habitat/create-habitat.component';
import { ViewImageHabitatComponent } from './pages/view-image-habitat/view-image-habitat.component';

const routes: Routes = [
     { path: '', component: DashbaordComponent },
     { path: 'all-users', component: AllUsersComponent },
     { path: 'create-habitat', component: CreateHabitatComponent },
     { path: 'view-image-habitat', component: ViewImageHabitatComponent },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class AdminRoutingModule {}

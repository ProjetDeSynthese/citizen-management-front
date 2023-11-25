import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { ListeHabitatComponent } from './pages/liste-habitat/liste-habitat.component';
import { FormsCreateHabitatComponent } from './compoments/forms-create-habitat/forms-create-habitat.component';
import { CreateHabitatComponent } from './pages/create-habitat/create-habitat.component';
import { ViewDetailHabitatComponent } from './compoments/view-detail-habitat/view-detail-habitat.component';


@NgModule({
  declarations: [
    DashbaordComponent,
    AllUsersComponent,
    ListeHabitatComponent,
    FormsCreateHabitatComponent,CreateHabitatComponent, ViewDetailHabitatComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

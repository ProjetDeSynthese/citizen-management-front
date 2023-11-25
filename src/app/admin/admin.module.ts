import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { CreateHabitatComponent } from './pages/create-habitat/create-habitat.component';
import { ViewImageHabitatComponent } from './pages/view-image-habitat/view-image-habitat.component';


@NgModule({
  declarations: [
    DashbaordComponent,
    AllUsersComponent,
    CreateHabitatComponent,
    ViewImageHabitatComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

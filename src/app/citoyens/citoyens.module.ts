import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitoyensRoutingModule } from './citoyens-routing.module';
import { AddCitoyensComponent } from './pages/add-citoyens/add-citoyens.component';
import { AllCitoyensComponent } from './pages/all-citoyens/all-citoyens.component';
import { ListHabitatComponent } from './pages/list-habitat/list-habitat.component';
import { ViewImageHabitatComponent } from './pages/view-image-habitat/view-image-habitat.component';

// @NgModule({
//   declarations: [
//     AddCitoyensComponent,
//     AllCitoyensComponent
//   ],

@NgModule({
     declarations: [ListHabitatComponent, ViewImageHabitatComponent, AddCitoyensComponent, AllCitoyensComponent],
     imports: [CommonModule, CitoyensRoutingModule],
})
export class CitoyensModule {}

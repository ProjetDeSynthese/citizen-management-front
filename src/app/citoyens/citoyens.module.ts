import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitoyensRoutingModule } from './citoyens-routing.module';
import { AddCitoyensComponent } from './pages/add-citoyens/add-citoyens.component';
import { AllCitoyensComponent } from './pages/all-citoyens/all-citoyens.component';


@NgModule({
  declarations: [
    AddCitoyensComponent,
    AllCitoyensComponent
  ],
  imports: [
    CommonModule,
    CitoyensRoutingModule
  ]
})
export class CitoyensModule { }

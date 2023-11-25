import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitoyensRoutingModule } from './citoyens-routing.module';
import { ListHabitatComponent } from './pages/list-habitat/list-habitat.component';
import { ViewImageHabitatComponent } from './pages/view-image-habitat/view-image-habitat.component';


@NgModule({
  declarations: [ListHabitatComponent, ViewImageHabitatComponent],
  imports: [
    CommonModule,
    CitoyensRoutingModule
  ]
})
export class CitoyensModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PropertiesComponent } from './pages/properties/properties.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'maisons', component: PropertiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternauteRoutingModule { }

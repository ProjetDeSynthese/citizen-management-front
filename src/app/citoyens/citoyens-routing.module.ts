import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCitoyensComponent } from './pages/add-citoyens/add-citoyens.component';
import { AllCitoyensComponent } from './pages/all-citoyens/all-citoyens.component';

const routes: Routes = [
  { path: 'add-citoyens', component: AddCitoyensComponent },
  { path: 'all-citoyens', component: AllCitoyensComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitoyensRoutingModule { }
 
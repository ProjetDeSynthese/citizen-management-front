import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'maisons', component: PropertiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'maison', component: PropertyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternauteRoutingModule { }

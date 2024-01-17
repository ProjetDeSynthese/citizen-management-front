import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitoyensDashboardRoutingModule } from './citoyens-dashboard-routing.module';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { ListeHabitatComponent } from './pages/liste-habitat/liste-habitat.component';
import { FormsCreateHabitatComponent } from './compoments/forms-create-habitat/forms-create-habitat.component';
import { ViewDetailHabitatComponent } from './compoments/view-detail-habitat/view-detail-habitat.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
     declarations: [DashbaordComponent, ListeHabitatComponent, FormsCreateHabitatComponent, ViewDetailHabitatComponent,HeaderComponent,FooterComponent,ProfileComponent],
     imports: [CommonModule, CitoyensDashboardRoutingModule],
})
export class CitoyensDashboardModule {}

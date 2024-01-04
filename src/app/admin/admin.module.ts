import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { QuartierComponent } from './pages/quartier/quartier.component';
import { SecteurComponent } from './pages/secteur/secteur.component';
import { DepartementComponent } from './pages/departement/departement.component';
import { RegionComponent } from './pages/region/region.component';
import { VilleComponent } from './pages/ville/ville.component';
import { CommuneComponent } from './pages/commune/commune.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './pages/add-utilisateur/add-utilisateur.component';
import { ListeHabitatComponent } from './pages/liste-habitat/liste-habitat.component';
import { FormsCreateHabitatComponent } from './compoments/forms-create-habitat/forms-create-habitat.component';
import { CreateHabitatComponent } from './pages/create-habitat/create-habitat.component';
import { ViewDetailHabitatComponent } from './compoments/view-detail-habitat/view-detail-habitat.component';
import { CoreModule } from "../core/core.module";
import { AddCitoyensComponent } from './pages/add-citoyens/add-citoyens.component';
import { AllCitoyensComponent } from './pages/all-citoyens/all-citoyens.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@NgModule({
    declarations: [
        DashbaordComponent,
        AllUsersComponent,
        QuartierComponent,
        SecteurComponent,
        DepartementComponent,
        RegionComponent,
        VilleComponent,
        CommuneComponent,
        UtilisateurComponent,
        AddUtilisateurComponent,
        ListeHabitatComponent,
        FormsCreateHabitatComponent,
        CreateHabitatComponent,
        ViewDetailHabitatComponent,
        AddCitoyensComponent,
        AllCitoyensComponent, HeaderComponent, FooterComponent, ProfileComponent
    ],
    imports: [CommonModule, AdminRoutingModule, CoreModule, ReactiveFormsModule,
    ]

    
})
export class AdminModule { }

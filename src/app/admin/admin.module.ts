import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';

import { AddUtilisateurComponent } from './pages/utilisateur/add-utilisateur/add-utilisateur.component';


@NgModule({
  declarations: [
    DashbaordComponent,
    AllUsersComponent,
    UtilisateurComponent,

    AddUtilisateurComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

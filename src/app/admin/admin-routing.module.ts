import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './pages/utilisateur/add-utilisateur/add-utilisateur.component';

const routes: Routes = [
  { path: '', component: DashbaordComponent },
  { path: 'all-users', component: AllUsersComponent },
  { path: 'user', component: UtilisateurComponent },
  { path: 'adduser', component: AddUtilisateurComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

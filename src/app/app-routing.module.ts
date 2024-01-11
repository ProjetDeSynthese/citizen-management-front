import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuatreCentQuatreComponent } from './core/error/quatre-cent-quatre/quatre-cent-quatre.component';
import { adminGuard } from './guards/admin.guard';
import { userGuard } from './guards/user.guard';
import { bailleurGuard } from './guards/bailleur.guard';

const routes: Routes = [
     {
          path: 'auth',
          loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
     },
     {
          path: 'admin',
          loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
          // canActivate: [adminGuard, bailleurGuard, userGuard],
     },

     {
          path: 'citoyens-dashboard',
          loadChildren: () => import('./citoyens-dashboard/citoyens-dashboard.module').then(m => m.CitoyensDashboardModule),
          canActivate: [userGuard],
     },
     {
          path: 'bailleur',
          loadChildren: () => import('./bailleur-dashboard/bailleur-dashboard.module').then(m => m.BailleurDashboardModule),
          canActivate: [bailleurGuard],
     },
     {
          path: 'citoyens',
          loadChildren: () => import('./citoyens/citoyens.module').then(m => m.CitoyensModule),
     },

     {
          path: '',
          loadChildren: () => import('./citoyens/citoyens.module').then(m => m.CitoyensModule),
     },
     {
          path: '**',
          component: QuatreCentQuatreComponent,
     },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}

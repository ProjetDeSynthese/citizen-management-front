import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuatreCentQuatreComponent } from './core/error/quatre-cent-quatre/quatre-cent-quatre.component';

import { LoginComponent } from './core/auth/login/login.component';

const routes: Routes = [

     {
          path: '',
         component:LoginComponent
     },
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
          // canActivate: [userGuard],
     },
 
     /* {
          path: '',
          loadChildren: () => import('./citoyens/citoyens.module').then(m => m.CitoyensModule),
     }, */
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

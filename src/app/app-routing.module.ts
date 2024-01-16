import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuatreCentQuatreComponent } from './core/error/quatre-cent-quatre/quatre-cent-quatre.component';
import { adminGuard } from './guards/admin.guard';
import { userGuard } from './guards/user.guard';
import { bailleurGuard } from './guards/bailleur.guard';

const routes: Routes = [

     {
          path: '',
          loadChildren: () => import('./internaute/internaute.module').then(m => m.InternauteModule),
          // canActivate: [adminGuard, bailleurGuard, userGuard],
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
          path: '**',
          component: QuatreCentQuatreComponent,
     },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}

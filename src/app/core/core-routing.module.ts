import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './pages/button/button.component';
import { ModalComponent } from './pages/modal/modal.component';
import { FormsElementsComponent } from './pages/forms-elements/forms-elements.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
     { path: 'connexion', component: LoginComponent, title: 'connexion' },
     { path: 'registre', component: RegisterComponent, title: 'registre' },
     { path: 'button', component: ButtonComponent },
     { path: 'modal', component: ModalComponent },
     { path: 'forms', component: FormsElementsComponent },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class CoreRoutingModule {}

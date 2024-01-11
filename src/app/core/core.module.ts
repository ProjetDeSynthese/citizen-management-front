import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FormsElementsComponent } from './pages/forms-elements/forms-elements.component';
import { ModalComponent } from './pages/modal/modal.component';
import { ButtonComponent } from './pages/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
     declarations: [FormsElementsComponent, ModalComponent, ButtonComponent, LoginComponent, RegisterComponent],

     imports: [CommonModule, CoreRoutingModule, ReactiveFormsModule, FormsModule],
})
export class CoreModule {}

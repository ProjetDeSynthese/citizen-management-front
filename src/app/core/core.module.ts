import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FormsElementsComponent } from './pages/forms-elements/forms-elements.component';
import { ModalComponent } from './pages/modal/modal.component';
import { ButtonComponent } from './pages/button/button.component';


@NgModule({
  declarations: [HeaderComponent, FormsElementsComponent, ModalComponent, ButtonComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],exports:[HeaderComponent]
})
export class CoreModule { }

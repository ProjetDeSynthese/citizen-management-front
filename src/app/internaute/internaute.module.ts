import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternauteRoutingModule } from './internaute-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    PropertiesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    InternauteRoutingModule
  ]
})
export class InternauteModule { }

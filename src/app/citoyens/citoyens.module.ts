import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitoyensRoutingModule } from './citoyens-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';
import { BooknowComponent } from './booknow/booknow.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RoomsComponent,
    ContactComponent,
    BooknowComponent
  ],
  imports: [
    CommonModule,
    CitoyensRoutingModule
  ]
})
export class CitoyensModule { }

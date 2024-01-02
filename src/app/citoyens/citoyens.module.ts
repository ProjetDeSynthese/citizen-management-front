import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitoyensRoutingModule } from './citoyens-routing.module';

import { ListHabitatComponent } from './pages/list-habitat/list-habitat.component';
import { ViewImageHabitatComponent } from './pages/view-image-habitat/view-image-habitat.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BooknowComponent } from './pages/booknow/booknow.component';
import { AboutComponent } from './pages/about/about.component';



@NgModule({
     declarations: [
          ListHabitatComponent,
          ViewImageHabitatComponent,
          HomeComponent,
          HeaderComponent,
          FooterComponent,
          RoomsComponent,
          ContactComponent,
          BooknowComponent,
          AboutComponent,
     ],
     imports: [CommonModule, CitoyensRoutingModule],
})
export class CitoyensModule {}

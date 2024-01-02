import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BooknowComponent } from './pages/booknow/booknow.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'home', component: HomeComponent },
     { path: 'room', component: RoomsComponent },
     { path: 'contact', component: ContactComponent },
     { path: 'booknow', component: BooknowComponent },
     { path: 'about', component: AboutComponent },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class CitoyensRoutingModule {}

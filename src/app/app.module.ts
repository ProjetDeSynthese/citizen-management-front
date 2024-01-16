import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { InternauteModule } from './internaute/internaute.module';

@NgModule({
     declarations: [AppComponent],
     imports: [
          BrowserModule,
          AppRoutingModule,
          CoreModule,
          ReactiveFormsModule,
          FormsModule,
          HttpClientModule,
          BrowserAnimationsModule,
          ToastrModule.forRoot(),
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerCitasComponent } from './components/ver-citas/ver-citas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AlojamientosComponent,
    RegistroCitasComponent,
    VerCitasComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

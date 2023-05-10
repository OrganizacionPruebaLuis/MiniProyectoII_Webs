import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerCitasComponent } from './components/ver-citas/ver-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    AlojamientosComponent,
    RegistroCitasComponent,
    VerCitasComponent,
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

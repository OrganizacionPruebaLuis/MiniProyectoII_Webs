import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { VerCitasComponent } from './components/ver-citas/ver-citas.component';
import { PantallaProgramadoresComponent } from './components/pantalla-programadores/pantalla-programadores.component';

const routes: Routes = [

  { path: 'registro/:id', component: RegistroCitasComponent },
  { path: '', component: AlojamientosComponent },
  { path: 'verCitas', component: VerCitasComponent },
  { path: 'programadores', component: PantallaProgramadoresComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

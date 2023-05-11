import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroCitasComponent } from './components/registro-citas/registro-citas.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { VerCitasComponent } from './components/ver-citas/ver-citas.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PantallaProgramadoresComponent } from './components/pantalla-programadores/pantalla-programadores.component';

const routes: Routes = [

  { path: 'registro/:id', component: RegistroCitasComponent },
  { path: 'alojamientos', component: AlojamientosComponent },
  { path: 'verCitas', component: VerCitasComponent },
  { path: 'home', component: HomeComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'programadores', component: PantallaProgramadoresComponent  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

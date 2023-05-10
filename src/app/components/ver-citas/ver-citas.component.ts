import { Component, OnInit } from '@angular/core';
import { ServicioCitasService } from 'src/app/services/citas/servicio-citas.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css'],
})
export class VerCitasComponent implements OnInit {
  mostrarCitas: any;

  constructor(private servicioCitas: ServicioCitasService) {}

  ngOnInit() {
    this.mostrarCitas = this.servicioCitas.obtenerCitas();
    console.log(this.mostrarCitas);
  }
}

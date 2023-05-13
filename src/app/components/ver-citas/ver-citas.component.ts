import { Component, OnInit } from '@angular/core';
import { ServicioCitasService } from 'src/app/services/citas/servicio-citas.service';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css'],
})
export class VerCitasComponent implements OnInit {
  mostrarCitas: any;
  alojamiento: string;
  alojamientoObject: any;
  alojamientoObjectStorage: any;
  arrayCitasObect: any;

  constructor(
    private servicioCitas: ServicioCitasService,
    private route: ActivatedRoute
  ) {
    this.alojamiento = localStorage.getItem('informacionCasaElegida')!;
    this.alojamientoObject = JSON.parse(this.alojamiento);
  }

  ngOnInit() {
    //------
    this.route.paramMap.subscribe((params: Params) => {
      //aqui seobtiene el valor que se paso por parametro en la ruta
      const nombreReservaStorage = params['get']('nombreReservaStorage');
      console.log('El valor del parámetro "id" es:', nombreReservaStorage);
      if (nombreReservaStorage != 'null') {
        console.log(
          localStorage.getItem(nombreReservaStorage.substring(1))!
        );
        
        this.alojamientoObjectStorage = JSON.parse(
          localStorage.getItem(nombreReservaStorage.substring(1))!
        );
        console.log(this.alojamientoObjectStorage);
        
       this.showModal();
      }
    });
    //-----
    this.arrayCitasObect = this.servicioCitas.obtenerCitas();
    let arrayCitas = JSON.stringify(this.arrayCitasObect);
    localStorage.setItem("arrayCitas" , arrayCitas);
    this.mostrarCitas = JSON.parse(localStorage.getItem("arrayReservaciones")!);
  }

  showModal() {
    Swal.fire({
      icon: 'success',
      title: `Reservacion registrada en el destino ${this.alojamientoObjectStorage.casaReservada.title} \n 
      para el dia ${this.alojamientoObjectStorage.arriveDate} \n
      para la hora ${this.alojamientoObjectStorage.hora}`,
      showConfirmButton: true,
    });
  }
}

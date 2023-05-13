import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioCitasService {
  private citas: any = [];

  guardarInformacion(citaEnviada: any) {
    if (window.localStorage.getItem('arrayReservaciones') !== '[]') {
      this.citas = JSON.parse(
        window.localStorage.getItem('arrayReservaciones')!
      );
    }
    let fechasOcupadas = 0;
    if (this.citas.length > 0) {
      console.log('Entre para guardar informacion');
      this.citas.map((cita: any) => {
        console.log(cita);
        if (
          citaEnviada.arriveDate === cita.arriveDate &&
          citaEnviada.casaReservada.id === cita.casaReservada.id
        ) {
          console.log('Ocupada');
          fechasOcupadas++;
        }
      });
      if (fechasOcupadas > 0) {
        return false;
      } else {
        this.citas.push(citaEnviada);
        return true;
      }
    } else {
      this.citas.push(citaEnviada);
      return true;
    }
  }

  obtenerCitas() {
    return this.citas;
  }
}

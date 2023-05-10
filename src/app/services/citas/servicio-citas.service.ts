import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioCitasService {
  private citas: any = [];

  constructor() {}

  guardarInformacion(citaEnviada: any) {
    this.citas.push(citaEnviada);
    console.log(this.citas);
  }

  obtenerCitas(){
    return this.citas;
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioCitasService } from 'src/app/services/citas/servicio-citas.service';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrls: ['./registro-citas.component.css'],
})
export class RegistroCitasComponent {
  registerForm: FormGroup;

  alojamiento: string;
  alojamientoObject: any;

  constructor(
    private formBuilder: FormBuilder,
    private servicioCitas: ServicioCitasService,
    private router: Router
  ) {
    this.alojamiento = localStorage.getItem('informacionCasaElegida')!;
    this.alojamientoObject = JSON.parse(this.alojamiento);

    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      casaReservada: [this.alojamientoObject],
      direccion: ['', Validators.required],
      arriveDate: ['', Validators.required],
      lastDate: ['', Validators.required],
      huespedes: ['', Validators.required],
      hora: ['', Validators.required],
      cardName: ['', Validators.required],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
      expirationDate: ['', Validators.required],
      securityCode: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(4)],
      ],
    });
  }

  submitForm() {
    console.log(this.registerForm);
    this.servicioCitas.guardarInformacion(this.registerForm.value);
    let registroCliente = JSON.stringify(this.registerForm.value);
    localStorage.setItem('informacionReserva', registroCliente);
    console.log(registroCliente);
    this.router.navigate([`/verCitas`]);
    this.registerForm.reset();
  }
}

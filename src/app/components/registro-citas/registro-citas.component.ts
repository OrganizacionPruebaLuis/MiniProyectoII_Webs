import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioCitasService } from 'src/app/services/citas/servicio-citas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrls: ['./registro-citas.component.css'],
})
export class RegistroCitasComponent {
  today: Date = new Date();
  selectedDate: Date | undefined;

  numeroDeCasaReservada = 0;

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
          Validators.minLength(2),
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

  async submitForm() {
    let validarRegistro: any;
    console.log(this.registerForm);
    validarRegistro = await this.servicioCitas.guardarInformacion(
      this.registerForm.value
    );
    console.log(validarRegistro);

    if (validarRegistro) {
      let registroCliente = JSON.stringify(this.registerForm.value);
      localStorage.setItem(
        `${this.registerForm.value.casaReservada.title}${this.registerForm.value.hora}`,
        registroCliente
      );
      this.numeroDeCasaReservada++;
      console.log(registroCliente);
      localStorage.removeItem('informacionCasaElegida');
      this.router.navigate([`/verCitas`]);
      this.registerForm.reset();
    } else {
      // alert('fecha en que has guardado info ya esta ocupada');
      this.showModal2();
    }
  }

  showModal() {
    Swal.fire({
      icon: 'success',
      title: 'Reservacion confirmada',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  showModal2() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La fecha que seleccionaste se encuentra ocupada',
      footer: 'Intenta con otra fecha',
    });
  }
}

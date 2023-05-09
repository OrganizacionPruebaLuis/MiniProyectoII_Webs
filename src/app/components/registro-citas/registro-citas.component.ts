import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrls: ['./registro-citas.component.css'],
})
export class RegistroCitasComponent {
  paymentForm: FormGroup;

  alojamiento: string;
  alojamientoObject: any;

  constructor(private formBuilder: FormBuilder) {
    this.alojamiento = localStorage.getItem('casa')!;
    console.log('<<<<<<<' + this.alojamiento);
    this.alojamientoObject = JSON.parse(this.alojamiento);
    console.log('>>>>>>' , this.alojamientoObject);

    this.paymentForm = this.formBuilder.group({
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
    // Envía el formulario
  }
}

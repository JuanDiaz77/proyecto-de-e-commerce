import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
})
export class CheckoutPage {

  amount: number = 0;
  paymentStatus: string | null = null;

  constructor(private paymentService: PaymentService) {}

  pay() {
    const userId = 1; // luego reemplazar por el usuario autenticado

    this.paymentService.createPayment(this.amount, userId).subscribe({
      next: (response) => {
        this.paymentStatus = 'Pago realizado correctamente';
        console.log('Payment response:', response);
      },
      error: (err) => {
        this.paymentStatus = 'Error al procesar el pago';
        console.error(err);
      }
    });
  }
}

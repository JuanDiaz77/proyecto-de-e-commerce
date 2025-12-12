import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
  imports: [IonicModule, FormsModule, CommonModule, RouterModule],
})
export class RegisterPage {

  name: string = "";
  email: string = "";
  password: string = "";

  // 👇 Necesario para navegar
  constructor(private router: Router) {}

  register() {
    if (this.name && this.email && this.password) {
      console.log("Usuario registrado:", this.name, this.email);

      // Ejemplo: volver al login después de registrar
      this.router.navigate(['/login']);
    } else {
      alert("Completa todos los campos.");
    }
  }

  // 👇 ESTA FUNCIÓN SOLUCIONA EL ERROR
  goToLogin() {
    this.router.navigate(['/login']);
  }
}

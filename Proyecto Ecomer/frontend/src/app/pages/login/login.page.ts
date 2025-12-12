import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, FormsModule,CommonModule], // Ionic, routing y formularios
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  login() {
    // Simulación de login
    if(this.email && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Por favor ingresa email y contraseña');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}

import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';   // 👈 IMPORTANTE

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})



export class HomePage implements OnInit {

  constructor(private router: Router) {}   // 👈 INYECTA ROUTER AQUÍ

  banners = [
    { img: 'assets/img/bog.jpg', title: 'Nuevos Productos', subtitle: 'Explora lo más reciente' },
    { img: 'assets/img/bog.jpg', title: 'Ofertas Especiales', subtitle: 'Descuentos hasta el 50%' },
    { img: 'assets/img/bog.jpg', title: 'Recomendados', subtitle: 'Productos que te encantarán' }
  ];

  cards = [
    { img: 'assets/img/bog.jpg', title: 'Producto 1', subtitle: 'Categoría A', description: 'Descripción del producto 1' },
    { img: 'assets/img/bog.jpg', title: 'Producto 2', subtitle: 'Categoría B', description: 'Descripción del producto 2' },
    { img: 'assets/img/bog.jpg', title: 'Producto 3', subtitle: 'Categoría C', description: 'Descripción del producto 3' },
    { img: 'assets/img/bog.jpg', title: 'Producto 4', subtitle: 'Categoría A', description: 'Descripción del producto 4' },
    { img: 'assets/img/bog.jpg', title: 'Producto 5', subtitle: 'Categoría B', description: 'Descripción del producto 5' },
    { img: 'assets/img/bog.jpg', title: 'Producto 6', subtitle: 'Categoría C', description: 'Descripción del producto 6' },
    { img: 'assets/img/bog.jpg', title: 'Producto 7', subtitle: 'Categoría A', description: 'Descripción del producto 7' },
    { img: 'assets/img/bog.jpg', title: 'Producto 8', subtitle: 'Categoría B', description: 'Descripción del producto 8' },
    { img: 'assets/img/bog.jpg', title: 'Producto 9', subtitle: 'Categoría C', description: 'Descripción del producto 9' }
  ];

  // 🔴 Cerrar sesión
  logout() {
    console.log("Sesión cerrada");
    // Si usas token:
    // localStorage.removeItem('token');
    
    this.router.navigate(['/login']);     // 👈 REDIRECCIONA AL LOGIN
  }

  // 🟢 Ir a pasarela de pago
  goToPayment(product?: any) {   // 👈 Parámetro opcional con "?"
  console.log("Entrando a pasarela de pago con:", product);

  this.router.navigate(['/checkout'], {
    state: { product }
  });
}

goToHelp() {
  this.router.navigate(['/help']);
}

goToOrders() {
  this.router.navigate(['/orders']);
}

goToAbout() {
  this.router.navigate(['/about']);
}

goToContact() {
  this.router.navigate(['/contact']);
}



  ngOnInit() {}
}

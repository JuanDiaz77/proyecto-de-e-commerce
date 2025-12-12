import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule,CommonModule],
})
export class ProductDetailPage implements OnInit {

  productId: number | null = null;
  product: any;

  products = [
    { id: 1, name: 'Producto 1', price: 100, description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: 200, description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', price: 300, description: 'Descripción del Producto 3' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);
  }

  addToCart() {
    alert(`${this.product.name} agregado al carrito`);
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}

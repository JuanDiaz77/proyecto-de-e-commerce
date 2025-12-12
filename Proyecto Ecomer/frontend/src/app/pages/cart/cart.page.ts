import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class CartPage implements OnInit {

  items: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clear();
    this.items = [];
    this.total = 0;
  }

}

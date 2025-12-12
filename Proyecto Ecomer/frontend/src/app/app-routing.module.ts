import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 🔵 Autenticación
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage) },

  // 🏠 Home
  { path: 'home', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },

  // 🛒 Productos
  { path: 'products', loadComponent: () => import('./pages/products/products.page').then(m => m.ProductsPage) },

  // 🔍 Detalle de producto
  { path: 'product-detail/:id', loadComponent: () => import('./pages/product-detail/product-detail.page').then(m => m.ProductDetailPage) },

  // 🛒 Carrito
  { path: 'cart', loadComponent: () => import('./pages/cart/cart.page').then(m => m.CartPage) },

  // 👤 Perfil
  { path: 'profile', loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage) },

  // 💳 PASARELA DE PAGO
  { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.page').then(m => m.CheckoutPage) },

  // 📘 AYUDA
  { path: 'help', loadComponent: () => import('./pages/help/help.page').then(m => m.HelpPage) },

  // 📦 PEDIDOS Y DEVOLUCIONES
  { path: 'orders', loadComponent: () => import('./pages/orders/orders.page').then(m => m.OrdersPage) },

  // ℹ️ QUIÉNES SOMOS
  { path: 'about', loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage) },

  // ✉️ CONTACTO
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class ProfilePage implements OnInit {

  user = {
    name: 'Juan',
    email: 'juan@example.com',
    avatar: '' // Puedes usar: 'assets/img/default-avatar.png'
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}

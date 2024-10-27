import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-cart',
  templateUrl: './floating-cart.component.html',
  styleUrls: ['./floating-cart.component.css']
})
export class FloatingCartComponent {
  cartItems = [];
  animate = false;

  

  triggerAnimation() {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 500); // Duración de la animación
  }
}

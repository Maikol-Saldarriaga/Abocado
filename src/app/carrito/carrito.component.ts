import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import emailjs from 'emailjs-com'; // Importa emailjs
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  items: any[] = [];
  total: number = 0;
  showModal: boolean = false;               // Controla el modal de formulario de compra
  showConfirmationModal: boolean = false;    // Controla el modal de confirmación de compra
  customerInfo = {
    nombre: '',
    telefono: '',
    direccion: '',
    correo: ''
  };

  comprobanteBase64: string = ''; // Almacena la imagen en Base64

  bancos = [
    { nombre: 'Bancolombia', qrUrl: 'assets/img/qr-bamcolombia.PNG', numeroCuenta: '1234567890' },
    { nombre: 'Nequi', qrUrl: 'assets/img/qr-nequi.PNG', numeroCuenta: '0987654321' }

  ];

  constructor(private cartService: CartService, private router: Router) {} // Inyecta el Router

  ngOnInit(): void {
    this.items = this.cartService.getItems().map(item => ({ ...item, cantidad: 1 }));
    this.calculateTotal();
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  openConfirmationModal() {
    this.showConfirmationModal = true;
  }

  closeConfirmationModal() {
    this.showConfirmationModal = false;
  }

  goInicio() {
    this.closeConfirmationModal();
    this.router.navigate(['/inicio']);
  }

  sendEmail() {
    const itemsDetalles = this.items.map(item => {
      const adiciones = item.adiciones.map((adicion: any) => `${adicion.nombre} (+${adicion.precio})`).join(', ');
      return `Plato: ${item.plato.nombre}\nAdiciones: ${adiciones}\nCantidad: ${item.cantidad}\nPrecio Total: ${this.calcularItemTotal(item)}`;
    }).join('\n\n');
  
    const templateParams = {
      from_name: this.customerInfo.nombre,
      reply_to: this.customerInfo.correo,
      message: `Teléfono: ${this.customerInfo.telefono}\nDirección: ${this.customerInfo.direccion}\n\nDetalles del Pedido:\n${itemsDetalles}\n\nTotal de la compra: ${this.total}`,
      comprobante: this.comprobanteBase64
    };
  
    emailjs.send('service_19gs5et', 'template_wfwq3rm', templateParams, 'FYeyTdRh4ZZ01aJLY')
      .then((response) => {
        console.log('Éxito!', response.status, response.text);
        alert('¡Correo enviado exitosamente!');
        this.clearCart();
        this.closeModal();
        this.openConfirmationModal();
      }, (error) => {
        console.log('Error al enviar el correo.', error);
        alert('Error al enviar el correo. Inténtalo de nuevo.');
      });
  }

  incrementarCantidad(index: number) {
    this.items[index].cantidad++;
    this.calculateTotal();
  }

  decrementarCantidad(index: number) {
    if (this.items[index].cantidad > 1) {
      this.items[index].cantidad--;
      this.calculateTotal();
    }
  }

  eliminarItem(index: number) {
    this.items.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.items.reduce((acc, item) => acc + this.calcularItemTotal(item), 0);
  }
  
  calcularItemTotal(item: any): number {
    const precioPlato = item.plato.precio;
    const precioAdiciones = item.adiciones.reduce((acc: number, adicion: any) => acc + adicion.precio, 0);
    return (precioPlato + precioAdiciones) * item.cantidad;
  }
  
  clearCart() {
    this.items = this.cartService.clearCart();
    this.total = 0;
    this.customerInfo = { nombre: '', telefono: '', direccion: '', correo: '' };
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.comprobanteBase64 = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}




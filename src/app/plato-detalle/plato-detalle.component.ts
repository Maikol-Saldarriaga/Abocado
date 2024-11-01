// src/app/components/plato-detalle/plato-detalle.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent {
  adiciones: { nombre: string; precio: number; seleccionada?: boolean }[] = [];
  total: number;
  peticionAdicional: string = ''; // Nueva propiedad

  constructor(
    public dialogRef: MatDialogRef<PlatoDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService: CartService
  ) {
    this.total = data.plato.precio;
    this.setAdiciones(data.tipoMenu);
  }

  setAdiciones(tipoMenu: string) {
    if (tipoMenu === 'hamburguesas') {
      this.adiciones = [
        { nombre: 'Sin lechuga', precio: 0.0, seleccionada: false },
        { nombre: 'Sin tomate', precio: 0.0, seleccionada: false },
        { nombre: 'Sin cebolla', precio: 0.0, seleccionada: false },
        { nombre: 'Cebolla caramelizada', precio: 500.0, seleccionada: false },
        { nombre: 'Adic mozzarela x 140 grs', precio: 6000.0, seleccionada: false },
        { nombre: 'Adic mozzarela x 70 grs', precio: 3000.0, seleccionada: false },
        { nombre: 'Adic philadelphia', precio: 7000.0, seleccionada: false },
      ];
    } else if (tipoMenu === 'papas') {
      this.adiciones = [
        { nombre: 'Solo pollo', precio: 0.00, seleccionada: false },
        { nombre: 'Solo Carne', precio: 0.00, seleccionada: false },
      ];
    } else if (tipoMenu === 'perros') {
      this.adiciones = [
        { nombre: 'Sin cebolla', precio: 0.0, seleccionada: false },
        { nombre: 'Adic mozzarela x 140 grs', precio: 6000.0, seleccionada: false },
        { nombre: 'Adic mozzarela x 70 grs', precio: 3000.0, seleccionada: false },
        { nombre: 'Adic philadelphia', precio: 7000.0, seleccionada: false },
      ];
    } else if (tipoMenu === 'bebidas') {
      this.adiciones = [];
    }
  }

  onAdicionChange(adicion: any, event: any) {
    adicion.seleccionada = event.target.checked;
    this.total += event.target.checked ? adicion.precio : -adicion.precio;
  }

  agregarAlCarrito() {
    const adicionesSeleccionadas = this.adiciones.filter(adicion => adicion.seleccionada);
    this.cartService.addToCart({
      plato: this.data.plato,
      adiciones: adicionesSeleccionadas,
      total: this.total,
      peticionAdicional: this.peticionAdicional // Envía la petición adicional
    });
    this.dialogRef.close();
  }
}

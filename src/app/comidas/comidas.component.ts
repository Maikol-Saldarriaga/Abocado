import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlatoDetalleComponent } from '../plato-detalle/plato-detalle.component';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
// src/app/components/menu/menu.component.ts
menuHamburguesas = [
  {
    nombre: 'Sweet Bacon',
    descripcion: 'nuestra nueva burger llego para quedarse, con esta mezcla de queso philadelphia, y mermelada de tocineta que te encantara, carne de hamburguesa de 146 grs asada al carbon, queso cheddar, vegetales frescos, acompañadas por papas a la francesa, y nuestro pan de la casa horneado a diario.',
    precio: 29000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Sweet-Bacon.jpeg' // Ruta de la imagen
  },
  {
    nombre: 'Triple M',
    descripcion: 'pan de la casa artesanal de elaboracion diaria, carne de 146 gramos artesanal, tartara de la casa, queso cheddar, queso philadelphia, pops de pechuga apanada, salsa BBQ de corozo, y papas a la francesa.',
    precio: 27000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Triple-M.jpeg' // Ruta de la imagen
  },

  {
    nombre: 'Pinchada',
    descripcion: 'Esta Burger cuenta con chicharrones crocantes demasiado deliciosos, una carne de res muy jugosa, huevito frito en el termino que mas te guste, queso mozzarella, nuestro pan artesanal suave y fresco del día, tocineta carnuda de la region, cebolla caramelizada en reducción de Bbq, vegetales frescos y que no falten nuestras papas a la francesa con tu salsa favorita',
    precio: 27000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Pinchada.jpg' // Ruta de la imagen
  },

  {
    nombre: 'De La Casa',
    descripcion: 'Pan artesanal sellado en mantequilla, carne de res 140 gr asada al carbón, queso mozzarella, tocineta ahumada, cebolla caramelizada, tomate, lechuga, papas a la francesa, salsas de la casa.',
    precio: 19500.00,
    imagenUrl: 'assets/img/img-hamburguesa/De-La-Casa.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Street Burger',
    descripcion: 'Pan artesanal, carne de res 100 gr al carbón, queso mozzarella, ripio de papa, cebolla cruda, tomate, lechuga, papas a la francesa, salsas de la casa.',
    precio: 13500.00,
    imagenUrl: 'assets/img/img-hamburguesa/Street-Burger.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Ambrosia',
    descripcion: 'Presentamos con orgullo nuestra ultima creación: AMBROSÍA una hamburguesa que te transportara a un festín de sabores y texturas inesperadas🍔✨ El viaje comienza con un pan brioche suave y dorado, seguido de 140 gramos de carne asada al carbon, tajada de queso cheddar, costilla de cerdo desmechada hecha en cocción lenta y terminada con salsa de notas agridulces, chips crocantes de yuca frita, se agrega frescura y el toque picante con la cebolla encurtida, nuestro dip de queso philadelphia y queso crema con salsa de uchuva, lechuga y tomate.',
    precio: 30000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Ambrosia.avif' // Ruta de la imagen
  },

  {
    nombre: 'Pinchada Pork',
    descripcion: 'esta Burger es demasiado brutal porque cuenta con una porción de costilla asada al carbón y terminada con Bbq, carne de res 100% , queso mozzarella, cebollitas caramelizadas, deliciosa tocineta, vegetales frescos, y su porción de papitas que no pueden faltar!',
    precio: 29000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Pinchada-Pork.jpeg' // Ruta de la imagen
  },

  {
    nombre: 'The Queen',
    descripcion: 'Definitivamente esta burger es la combinacion perfecta entre lo dulce y lo salado, y es que ese dulcesito que te da el pimenton y la suavidad y cremosidad que te ofrece el queso philadelphia la hacen unica, pan artesanal de la casa, carne de res de 140gr asada al carbon, queso cheddar, lechuga, tomate y por supesto papitas a la francesa naturales acompañadas de nuestras deliciosas salsas.',
    precio: 25000.00,
    imagenUrl: 'assets/img/img-hamburguesa/The-Queen.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Americana',
    descripcion: 'Jugosa carne de res 140 gr al carbón, queso cheddar, pan de la casa sellado en mantequilla, aro de cebolla crocante, tocineta ahumada, pepinillos agridulces, lechuga, tomate, papas a la francesa, salsas de la casa.',
    precio: 21500.00,
    imagenUrl: 'assets/img/img-hamburguesa/Americana.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Super Bacon',
    descripcion: 'Pan de la casa, carne artesanal 140 gr, queso mozzarella, 4 deliciosas lonjas de tocineta carnuda, cebolla grillé, lechuga, tomate, papas a la francesa, salsas de la casa.',
    precio: 24000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Super-Bacon.jpg' // Ruta de la imagen
  },


  {
    nombre: 'Portobello',
    descripcion: 'Carne de res 140 gr, pollo desmechado, champiñones en salsa, queso mozzarella, nuestro pan de la casa, lechuga, tomate, papas a la francesa, salsas de la casa.',
    precio: 23000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Portobello.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Doble Carne',
    descripcion: 'Doble carne artesanal de res 140 gr, doble queso mozzarella, tocineta ahumada, cebolla caramelizada, tomate, lechuga, papas a la francesa, delicioso pan de la casa, salsas de la casa.',
    precio: 28000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Doble-Carne.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Mexicana',
    descripcion: 'Carne desmechada, carne de res de 140 gr, queso cheddar, guacamole de la casa, jalapeños, ají picante, cebolla cruda, papa a la francesa, salsas de la casa, pan de la casa.',
    precio: 24500.00,
    imagenUrl: 'assets/img/img-hamburguesa/Mexicana.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Mixta',
    descripcion: 'Pero claro que vas a la fija con esta burger, carne de res 140 gr asada al carbon, pollo desmechado con tartara, tocineta carnuda de la region, aritos de cebolla crocanticos hechos por nuestros cociineros, queso mozzarella, tomate, lechuga, pan sellado en mantequilla, papas a la francesa naturales, salsas de la casa.',
    precio: 23500.00,
    imagenUrl: 'assets/img/img-hamburguesa/Mixta.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Polres',
    descripcion: 'Pan artesanal, carne de pollo de 110 gr, carne de res 140 gr, doble queso mozarella, tocineta ahumada, cebolla caramelizada, tomate, lechuga, papas a la francesa, salsas de la casa.',
    precio: 30000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Polres.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Pollo Crispy',
    descripcion: 'Compuesta por una crujiente pechuga de pollo apanada, carne 100% de res asada al carbon con doble queso mozzarella, cebollas caramelizadas en reduccion de Bbq, tomate, lechuga, nuestro delicioso pan sellado en manequilla, papitas a la francesa, salsas de la casa.',
    precio: 24000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Pollo-Crispy.jpeg' // Ruta de la imagen
  },


  {
    nombre: 'Pulled Pork',
    descripcion: 'Seguro que despues que la pruebes la seguiras pidiendo, pan selladosky, costilla de cerdo desmechada con una coccion lenta en sus jugos y terminada en Bbq, 146gr de pura res asadita al carbon parceros como nos gusta, quesito mozzarella, bacon ahumada, cebolla caramelizada, vegetaes frescos (lechuga, tomate) y obvio nuestras papitas a la francesa con la salsa que tu elijas',
    precio: 24000.00,
    imagenUrl: 'assets/img/img-hamburguesa/Pulled-Pork.jpg' // Ruta de la imagen
  },

];

//PAPAS

menuPapas = [
  {
    nombre: 'Papas Mini',
    descripcion: 'Carne desmechada, pollo desmechado, papas a la francesa naturales, maicitos, tocineta picada, queso rayado, salsa tártara y rosada la casa.',
    precio: 14500.00,
    imagenUrl: 'assets/img/img-papas/Mini.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Papas Medianas',
    descripcion: 'Papas a la francesa naturales, carne desmechada, pollo desmechado, maicitos, tocinetas picada, queso rayado, salsa tártara y rosada de la casa.',
    precio: 26500.00,
    imagenUrl: 'assets/img/img-papas/Medianas.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Papas Grande',
    descripcion: 'Pollo desmechado, carne desmechada, salchicha XL colanta, maicitos, tocineta picada, papas a la francesa naturales, queso mozzarella gratinado, salsas de la casa.',
    precio: 42500.00,
    imagenUrl: 'assets/img/img-papas/Grande.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Papas Especial',
    descripcion: 'Pollo desmechado, carne desmechada, salchicha tipo ranchera, maicitos, tocineta picada, papas a la francesa naturales, queso mozzarella gratinado, aros de cebolla crocantes, salsas de la casa.',
    precio: 30000.00,
    imagenUrl: 'assets/img/img-papas/Grande.jpg' // Ruta de la imagen
  },

];

menuPerros = [
  {
    nombre: 'Perro Sencillo',
    descripcion: 'Pan bimbo, salchicha long Zenu, cebolla grillé, ripio de papa, queso costeño rayado, salsas de la casa.',
    precio: 11000.00,
    imagenUrl: 'assets/img/img-perros/sencillo.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Perro Macancan',
    descripcion: 'Pan artesanal de la casa, salchicha long Zenu, 130 gr carnes de picada, ripio de papa, cebolla grillé, tocineta picada, queso mozzarella gratinado, papas a la francesa, salsa tártara y rosada de la casa.',
    precio: 22000.00,
    imagenUrl: 'assets/img/img-perros/macancan.jpeg' // Ruta de la imagen
  },

  {
    nombre: 'Perro Suizo',
    descripcion: 'pan artesanal de la casa, salchicha suiza de zenu, cebolla grille, queso mozzarella gratinado, ripio de papa, tocineta picada, papas a la francesa, salsas de la casa',
    precio: 21500.00,
    imagenUrl: 'assets/img/img-perros/suizo.jpeg' // Ruta de la imagen
  },



];

menuBebidas = [
  {
    nombre: 'Coca cola 400 ml',
    descripcion: 'Coca cola clasica con azucar',
    precio: 4000.00,
    imagenUrl: 'assets/img/img-bebidas/coca-cola1.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Coca cola cero 400 ml',
    descripcion: 'Coca cola sin azucar',
    precio: 4000.00,
    imagenUrl: 'assets/img/img-bebidas/coca-cola2.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Coca cola clasica 1.5 litros',
    descripcion: 'Coca cola clasica familiar con azucar',
    precio: 8000.00,
    imagenUrl: 'assets/img/img-bebidas/coca-cola3.png' // Ruta de la imagen
  },


  {
    nombre: 'Coca cola cero 1.5 litros',
    descripcion: 'Coca cola familiar sin azucar',
    precio: 8000.00,
    imagenUrl: 'assets/img/img-bebidas/coca-cola4.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Postobón 400 ml',
    descripcion: 'Gaseosa postobon de personal',
    precio: 3500.00,
    imagenUrl: 'assets/img/img-bebidas/postobon1.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Postobón 1.5 litros',
    descripcion: 'Gaseosa postobon de familiar',
    precio: 6000.00,
    imagenUrl: 'assets/img/img-bebidas/postobon2.png' // Ruta de la imagen
  },

  {
    nombre: 'Soda 300 ml',
    descripcion: 'Gaseosa soda personal',
    precio: 4000.00,
    imagenUrl: 'assets/img/img-bebidas/soda1.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Jugo Hit 500 ml',
    descripcion: 'Jugo hit personal en botella',
    precio: 4000.00,
    imagenUrl: 'assets/img/img-bebidas/hit.jpg' // Ruta de la imagen
  },

  {
    nombre: 'Agua brisa 600 ml',
    descripcion: 'Botella de agua personal',
    precio: 2500.00,
    imagenUrl: 'assets/img/img-bebidas/agua.jpg' // Ruta de la imagen
  },


  
];






constructor(public dialog: MatDialog) {}

openPlatoDetalle(plato: any, tipoMenu: string): void {
  const isMobile = window.innerWidth <= 768; // Define el umbral de tamaño para móvil (768px)

  this.dialog.open(PlatoDetalleComponent, {
    data: {
      plato,
      tipoMenu, // Pasa el tipo de menú para identificar adiciones
    },
    width: isMobile ? '80vw' : '40vw',   // Ancho: 95% en móviles, 80% en pantallas grandes
    height: isMobile ? '90vh' : '95vh',   // Alto: 90% en móviles, 95% en pantallas grandes
    maxWidth: '100vw',
    maxHeight: '100vh'
  });
}
}
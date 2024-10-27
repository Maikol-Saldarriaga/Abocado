import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComidasComponent } from './comidas/comidas.component';
import { PlatoDetalleComponent } from './plato-detalle/plato-detalle.component';
import { CartService } from './cart.service';
import { CarritoComponent } from './carrito/carrito.component';
import { FloatingCartComponent } from './floating-cart/floating-cart.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { WeComponent } from './we/we.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { UbicaionComponent } from './ubicaion/ubicaion.component';
import { FeedbackComponent } from './feedback/feedback.component';
const routes: Routes = [


  //ruta del path de inicio (carga todos los componentes)
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},

  //ruta para redirigir a carrito
  { path: 'nosotros', component: NosotrosComponent },

  
  { path: 'carrito', component: CarritoComponent },
  


  { path: 'feedback', component: FeedbackComponent },

  //ruta para redirigir a la interfaz del tecnico
 // { path: 'consultas', component: UserComponent },

   //ruta para redirigir a la interfaz del tecnico
 //{ path: 'opcion1', component: Opcion1Component },




  //ruta  de path no encontrado
 // { path: '**', component: PagenotfoundComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    AboutUsComponent,
    ComidasComponent,
    PlatoDetalleComponent,
    CarritoComponent,
    FloatingCartComponent,
    NosotrosComponent,
    WeComponent,
    ServiciosComponent,
    ContactComponent,
    FooterComponent,
    LocationComponent,
    UbicaionComponent,
    FeedbackComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    FormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

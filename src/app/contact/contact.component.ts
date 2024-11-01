import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  satisfaction = {
    foodQuality: '',
    staffService: '',
    restaurantAmbience: '',
    recommendation: ''
  };

  sendEmail() {
    const templateParams = {
      from_name: this.name,
      reply_to: this.email,
      message: this.message,
      foodQuality: this.satisfaction.foodQuality,
      staffService: this.satisfaction.staffService,
      restaurantAmbience: this.satisfaction.restaurantAmbience,
      recommendation: this.satisfaction.recommendation
    };

    emailjs.send('service_0g4imso', 'template_94fg6aw', templateParams, 'FYeyTdRh4ZZ01aJLY')
      .then((response) => {
          console.log('Éxito!', response.status, response.text);
          alert('¡Correo enviado exitosamente!');
          this.name = '';
          this.email = '';
          this.message = '';
          this.satisfaction = {
            foodQuality: '',
            staffService: '',
            restaurantAmbience: '',
            recommendation: ''
          };
      }, (error) => {
          console.log('Error al enviar el correo.', error);
          alert('Error al enviar el correo. Inténtalo de nuevo.');
      });
  }
}

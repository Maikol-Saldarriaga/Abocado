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

  sendEmail() {
    const templateParams = {
      from_name: this.name,       // Variable para el nombre del remitente
      reply_to: this.email,       // Variable para el correo del remitente
      message: this.message       // Variable para el mensaje del remitente
    };

    emailjs.send('service_0g4imso', 'template_94fg6aw', templateParams, 'FYeyTdRh4ZZ01aJLY')
      .then((response) => {
          console.log('Éxito!', response.status, response.text);
          alert('¡Correo enviado exitosamente!');
          this.name = '';
          this.email = '';
          this.message = '';
      }, (error) => {
          console.log('Error al enviar el correo.', error);
          alert('Error al enviar el correo. Inténtalo de nuevo.');
      });
  }
}

      
import { Component, OnInit } from '@angular/core';

interface Employee {
  name: string;
  imageUrl: string;
  rating: number;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {
  employees: Employee[] = [
    { name: 'Juan Pérez', imageUrl: 'assets/img/empleado1.jpg', rating: this.getRandomRating() },
    { name: 'Carlos Sánchez', imageUrl: 'assets/img/empleado2.jpg', rating: this.getRandomRating() },
    { name: 'Oriana Ramos', imageUrl: 'assets/img/empleado3.jpg', rating: this.getRandomRating() },
    { name: 'Ana Ramírez', imageUrl: 'assets/img/empleado4.jpg', rating: this.getRandomRating() }
  ];

  constructor() {}

  ngOnInit(): void {}

  getRandomRating(): number {
    return Math.floor(Math.random() * 5) + 1;
  }

  // Actualizar la calificación de un empleado
  updateRating(employee: Employee, newRating: number): void {
    employee.rating = newRating;
  }
}
import { Component } from '@angular/core';
import { Car } from '../myclasses';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  cars: Car[] = [
    new Car('Toyota', 'Camry', 'Sedan', 'Silver'),
    new Car('Ford', 'Mustang', 'Coupe', 'Red'),
    new Car('Tesla', 'Model X', 'SUV', 'Black'),
    new Car('BMW', '3 Series', 'Sedan', 'Blue'),
    new Car('Honda', 'Civic', 'Hatchback', 'White')
  ];
  selectedCar: Car | null = null;

  selectCar(car: Car): void {
    this.selectedCar = car;
  }

  closeModal(): void {
    this.selectedCar = null;
  }
}

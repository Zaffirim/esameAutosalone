import { Component } from '@angular/core';
import { Cars } from 'src/cars.interface';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent {

  cars!: Cars[];

  constructor() {
    this.getCars().then((cars) => {
      this.cars = cars;
    });
  }

  async getCars(): Promise<Cars[]> {
    let response= await fetch('../../assets/db.json');
    let data = (await response.json()) as Array<Cars>;

    return data.filter((car) => car.brand === 'Audi')
  }
}

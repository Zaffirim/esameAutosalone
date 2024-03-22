import { Component } from '@angular/core';
import { Cars } from 'src/cars.interface';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})
export class FiatComponent {

  cars!: Cars[];

  constructor() {
    this.getCars().then((cars) => {
      this.cars = cars;
    });
  }

  async getCars(): Promise<Cars[]> {
    let response= await fetch('../../assets/db.json');
    let data = (await response.json()) as Array<Cars>;

    return data.filter((car) => car.brand === 'Fiat')
  }
}

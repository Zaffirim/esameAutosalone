import { Component } from '@angular/core';
import { Cars } from 'src/cars.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  cars!: Cars[];

  constructor() {
    this.getCars().then((cars) => {
      this.cars = cars;
    });
  }

  async getCars() {
    let response= await fetch('../../assets/db.json');
    let data = await response.json();
    return this.shuffle(data).slice(0,2)
  }

  shuffle(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}

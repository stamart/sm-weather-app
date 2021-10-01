import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smWeatherApp';
  city: string;
  globalCity: string;

  constructor() {
    this.city = 'Rzeszow';
    this.globalCity = 'Rzeszow';
  }

  searchCityFunction(city: string){
    this.globalCity = city;
  }

}

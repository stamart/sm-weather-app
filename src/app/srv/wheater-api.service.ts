import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WheaterApiService {

  apiKey: string = "8e6330f7f437106b517d425eedde9f72";
  currentWeatherUrl: string = "https://api.openweathermap.org/data/2.5/weather";
  ForecastWeatherUrl: string = "https://api.openweathermap.org/data/2.5/forecast"


  constructor() { }
}

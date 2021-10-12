import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  response: any;

  apiKey: string = "";
  currentWeatherUrl: string = "https://api.openweathermap.org/data/2.5/weather";
  ForecastWeatherUrl: string = "https://api.openweathermap.org/data/2.5/forecast"

  constructor() { }

  getCurrentWeatherObject(city :string){
    return fetch(`${this.currentWeatherUrl}?q=${city}&appid=${this.apiKey}`)
      .then(response=>response.json());
  }

  getForecastWeatherObject(city :string){
    return fetch(`${this.ForecastWeatherUrl}?q=${city}&appid=${this.apiKey}`)
      .then(response=>response.json());
  }


}

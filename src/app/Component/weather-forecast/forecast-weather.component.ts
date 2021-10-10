import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {WeatherApiService} from "../../srv/weather-api.service";

@Component({
  selector: 'forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeather implements OnInit, OnChanges {
  forecastObject: any;
  hourlyForecast: any[];
  @Input() globalCity: string;


  constructor(private snackBar: MatSnackBar, private service: WeatherApiService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getWeatherObject(this.globalCity);
    }

  ngOnInit(): void {
    this.forecastObject = {
      main : {},
      city : {},
      isDay: true,
      list: []
    };
    this.getWeatherObject(this.globalCity);
    console.log(this.forecastObject);
  }

  getWeatherObject(city :string){
    this.service.getForecastWeatherObject(city)
    .then(data=>{this.setForecastObject(data);});
  }

  setForecastObject(weatherData: any) {
    console.log('forecast weather',weatherData);
    this.forecastObject = weatherData;
    this.hourlyForecast = this.forecastObject.list;
    console.log('ForecastObject',this.forecastObject);




    // let sunsetTime = new Date(this.WeatherObject.sys.sunset * 1000);
    // this.WeatherObject.sunset_time = sunsetTime.toLocaleTimeString();
    //
    // let currentDate = new Date();
    // // this.WeatherObject.isRaining = this.WeatherObject.rain. > 1;
    // this.WeatherObject.isCloudy = this.WeatherObject.clouds.all == 1;
    // this.WeatherObject.isDay = (currentDate.getTime() < sunsetTime.getTime());
    // this.WeatherObject.temp_celcius = this.convertToCelcius(this.WeatherObject.main.temp,1);
    // this.WeatherObject.temp_celcius_min = this.convertToCelcius(this.WeatherObject.main.temp_min,0);
    // this.WeatherObject.temp_celcius_max = this.convertToCelcius(this.WeatherObject.main.temp_max,0);
    // this.forecastObject.temp_feels_like = this.convertToCelcius(this.forecastObject.main.feels_like);

  }

  getTemperature(item: any) {
    let weather = `${this.convertToCelcius(item.main.temp_min)}°/${this.convertToCelcius(item.main.temp_max)}°`;
    return weather
  }

  getIcon(icon: any){
    return `http://openweathermap.org/img/wn/${icon}.png`;
  }

  convertToCelcius(temp: any){
    let convertedTemp;
    convertedTemp = (temp - 273.15).toFixed(0);
    /* konwersja do celcjusza z zaokroągleniem do 1 po przecinku */
    return convertedTemp;
  }
}

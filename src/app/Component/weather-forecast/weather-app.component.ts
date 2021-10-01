import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {WeatherApiService} from "../../srv/weather-api.service";

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit, OnChanges {

  @Input() globalCity: string;

  WeatherObject: any;

  constructor(private snackBar: MatSnackBar, private service: WeatherApiService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getWeatherObject(this.globalCity);
    }

  ngOnInit(): void {
    this.WeatherObject = {
      main : {},
      isDay: true
    };
    this.getWeatherObject(this.globalCity);
    console.log(this.WeatherObject);
  }

  getWeatherObject(city :string){
    this.service.getCurrentWeatherObject(city)
    .then(data=>{this.setWeatherObject(data);});
  }

  setWeatherObject(weatherData: any) {
    this.WeatherObject = weatherData;
    let sunsetTime = new Date(this.WeatherObject.sys.sunset * 1000);
    this.WeatherObject.sunset_time = sunsetTime.toLocaleTimeString();

    let currentDate = new Date();
    // this.WeatherObject.isRaining = this.WeatherObject.rain. > 1;
    this.WeatherObject.isCloudy = this.WeatherObject.clouds.all == 1;
    this.WeatherObject.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherObject.temp_celcius = this.convertToCelcius(this.WeatherObject.main.temp,1);
    this.WeatherObject.temp_celcius_min = this.convertToCelcius(this.WeatherObject.main.temp_min,0);
    this.WeatherObject.temp_celcius_max = this.convertToCelcius(this.WeatherObject.main.temp_max,0);
    this.WeatherObject.temp_feels_like = this.convertToCelcius(this.WeatherObject.main.feels_like,0);

  }

  convertToCelcius(temp: any, fixed: any){
    let convertedTemp;
    convertedTemp = (temp - 273.15).toFixed(fixed);
    /* konwersja do celcjusza z zaokroągleniem do 1 po przecinku */
    return convertedTemp;
  }

}

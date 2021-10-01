import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  WeatherObject:any;
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.WeatherObject = {
      city: 'rzeszow',
      main : {},
      isDay: true
    };
    this.getWeatherObject();
    console.log(this.WeatherObject);
  }

  getWeatherObject(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.WeatherObject.city}&appid=8e6330f7f437106b517d425eedde9f72`)
    .then(response=>response.json())
    .then(data=>{this.handlerRespons(data);})
    .catch(err=>{this.errorHandler(err)});
  }

  handlerRespons(weatherData:any){
    console.log('recived object',weatherData);
    if(this.isCorrectResponse(weatherData)){
      this.setWeatherObject(weatherData);
    }else {
      this.alertMessage(weatherData);
    }
  }

  alertMessage(weatherData: any) {
    console.log('Error:',weatherData.message);
    this.snackBar.open(weatherData.message, "close");
  }

  errorHandler(err: any) {
    console.log('Error',err);
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

  searchCityFunction(){
    console.log('searchCity',this.WeatherObject.city);
    this.getWeatherObject();
  }

  private isCorrectResponse(weatherData: any) {
    return weatherData.cod == '200';
  }

}

import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {WeatherApiService} from "../../srv/weather-api.service";

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class currentWeather implements OnInit, OnChanges {

  @Input() globalCity: string;

  weatherObject: any;

  constructor(private snackBar: MatSnackBar,private service: WeatherApiService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getWeatherObject(this.globalCity);
    }

  ngOnInit(): void {
    this.weatherObject = {
      city: 'rzeszow',
      main : {},
      isDay: true
    };
    this.getWeatherObject(this.weatherObject.city);
    console.log(this.weatherObject);
  }

  getWeatherObject(city :string){
    this.service.getCurrentWeatherObject(city)
      .then(data=>{this.handlerRespons(data);})
  }

  handlerRespons(weatherData:any){
    console.log('current weather',weatherData);
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
    this.weatherObject = weatherData;
    let sunsetTime = new Date(this.weatherObject.sys.sunset * 1000);
    this.weatherObject.sunset_time = sunsetTime.toLocaleTimeString();

    let currentDate = new Date();
    // this.WeatherObject.isRaining = this.WeatherObject.rain. > 1;
    this.weatherObject.isCloudy = this.weatherObject.clouds.all == 1;
    this.weatherObject.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.weatherObject.temp_celcius = this.convertToCelcius(this.weatherObject.main.temp,1);
    this.weatherObject.temp_celcius_min = this.convertToCelcius(this.weatherObject.main.temp_min,0);
    this.weatherObject.temp_celcius_max = this.convertToCelcius(this.weatherObject.main.temp_max,0);
    this.weatherObject.temp_feels_like = this.convertToCelcius(this.weatherObject.main.feels_like,0);

  }

  convertToCelcius(temp: any, fixed: any){
    let convertedTemp;
    convertedTemp = (temp - 273.15).toFixed(fixed);
    /* konwersja do celcjusza z zaokroągleniem do 1 po przecinku */
    return convertedTemp;
  }

  // searchCityFunction(){
  //   console.log('searchCity',this.WeatherObject.city);
  //   this.getWeatherObject();
  // }

  checkGlobalCity(){
    console.log('searchCity',this.globalCity);
  }

  private isCorrectResponse(weatherData: any) {
    return weatherData.cod == '200';
  }

}

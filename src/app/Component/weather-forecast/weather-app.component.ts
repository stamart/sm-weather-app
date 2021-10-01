import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {

  WeatherObject:any;

  // weatherJson = '{"coord": {"lon": -122.08,"lat": 37.39},"weather": [{"id": 800,"main": "Clear","description": "clear sky","icon": "01d"}],"base": "stations","main": {"temp": 282.55,"feels_like": 281.86,"temp_min": 280.37,"temp_max": 284.26,"pressure": 1023,"humidity": 100},"visibility": 16093,"wind": {"speed": 1.5,"deg": 350},"clouds": {"all": 1,"1h": 11},"rain": {"1h": 11,"3h": 11} ,"dt": 1560350645,"sys": {"type": 1,"id": 5122,"message": 0.0139,"country": "US","sunrise": 1560343627,"sunset": 1560396563},"timezone": -25200,"id": 420006353,"name": "Mountain View","cod": 200}';

  constructor() { }

  ngOnInit(): void {
    this.WeatherObject = {
      main : {},
      isDay: true
    };
    this.getWeatherObject();
    console.log(this.WeatherObject);
  }

  getWeatherObject(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=warsaw&appid=8e6330f7f437106b517d425eedde9f72')
    .then(response=>response.json())
    .then(data=>{this.setWeatherObject(data);});

    // let weatherData = JSON.parse(this.weatherJson);
    // this.setWeatherObject(weatherData);
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForecastWeather } from './Component/weather-forecast/forecast-weather.component';
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from './Component/slider/slider.component';
import { currentWeather } from './Component/search-weather/current-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ForecastWeather,
    SliderComponent,
    currentWeather,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherAppComponent } from './Component/weather-forecast/weather-app.component';
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from './Component/slider/slider.component';
import { SearchComponent } from './Component/search-weather/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    SliderComponent,
    SearchComponent,
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

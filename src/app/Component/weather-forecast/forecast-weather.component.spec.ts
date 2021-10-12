import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWeather } from './forecast-weather.component';

describe('WeatherAppComponent', () => {
  let component: ForecastWeather;
  let fixture: ComponentFixture<ForecastWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastWeather ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastWeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

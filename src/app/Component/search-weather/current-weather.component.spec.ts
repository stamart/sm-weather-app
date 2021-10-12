import { ComponentFixture, TestBed } from '@angular/core/testing';

import { currentWeather } from './current-weather.component';

describe('SearchComponent', () => {
  let component: currentWeather;
  let fixture: ComponentFixture<currentWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ currentWeather ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(currentWeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

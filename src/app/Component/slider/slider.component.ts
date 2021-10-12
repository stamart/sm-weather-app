import {Component, ViewEncapsulation, Input, OnChanges, SimpleChanges} from "@angular/core";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-slider',
  template: `
    <swiper [pagination]="true" class="mySwiper">
    <ng-template swiperSlide><current-weather [globalCity]="globalCity"></current-weather></ng-template>
    <ng-template swiperSlide><forecast-weather [globalCity]="globalCity"></forecast-weather></ng-template>
    </swiper>
  `,
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SliderComponent implements OnChanges{
  @Input() globalCity: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.globalCity);
  }
}

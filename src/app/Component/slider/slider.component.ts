import {Component, ViewEncapsulation, ViewChild, AfterContentChecked} from "@angular/core";
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-slider',
  template: `
    <swiper [pagination]="true" class="mySwiper">
    <ng-template swiperSlide><app-search></app-search></ng-template>
    <ng-template swiperSlide><app-weather-app></app-weather-app></ng-template>
    </swiper>
  `,
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent{

}

import { Component, Input, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {Navigation, Pagination, SwiperOptions} from 'swiper';
import { IHero } from '../../hero/interfaces/hero.interface';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-hero-swiper',
  templateUrl: './hero-swiper.component.html',
  styleUrls: ['./hero-swiper.component.scss'],
})
export class HeroSwiperComponent {

  swiperConfig: SwiperOptions = {
    centeredSlides: true,
    initialSlide: 0,
    navigation: true,
    observeParents: true,
    pagination: {
      clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 30
  }

  @Input() team: IHero[];
  @ViewChild('teamSlider') teamSlider: SwiperComponent;
  animationInProgress = false;

  constructor() { }

  ngAfterViewInit() {
    this.startAnimation();
  }

  startAnimation() {
    if(this.animationInProgress) return;
    this.animationInProgress = true;
    setTimeout(() => {
      this.teamSlider.swiperRef.slideNext(2000);
      this.animationInProgress = false;
      this.startAnimation();
    }, 5000);
  }

  next() {
    this.teamSlider.swiperRef.slideNext(1000);
  }

}

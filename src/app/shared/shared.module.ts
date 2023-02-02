import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroDetailedCardComponent } from './components/hero-detailed-card/hero-detailed-card.component';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { HeroSwiperComponent } from './components/hero-swiper/hero-swiper.component';
import { ErrorCardComponent } from './components/error-card/error-card.component';



@NgModule({
  declarations: [
    HeroCardComponent,
    HeroDetailedCardComponent,
    HeroItemComponent,
    HeroSwiperComponent,
    ErrorCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule
  ],
  exports: [
    HeroCardComponent,
    HeroDetailedCardComponent,
    HeroItemComponent,
    HeroSwiperComponent,
    ErrorCardComponent
  ]
})
export class SharedModule { }

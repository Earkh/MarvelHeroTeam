import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroCardComponent } from './shared/hero-card/hero-card.component';
import { HeroSwiperComponent } from './shared/hero-swiper/hero-swiper.component';

@NgModule({
  declarations: [AppComponent, HeroCardComponent, HeroSwiperComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, SwiperModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

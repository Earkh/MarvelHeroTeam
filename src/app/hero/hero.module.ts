import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListPage } from './hero-list/hero-list.page';
import { HeroViewPage } from './hero-view/hero-view.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroListPage,
    HeroViewPage
  ],
})
export class HeroModule { }

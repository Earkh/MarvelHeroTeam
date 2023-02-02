import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroListPage } from './hero-list/hero-list.page';
import { HeroViewPage } from './hero-view/hero-view.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HeroRoutingModule,
    SharedModule
  ],
  declarations: [
    HeroListPage,
    HeroViewPage
  ]
})
export class HeroModule { }

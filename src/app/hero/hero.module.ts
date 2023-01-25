import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListPage } from './hero-list/hero-list.page';
import { HeroViewPage } from './hero-view/hero-view.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HeroRoutingModule,
    FormsModule
  ],
  declarations: [
    HeroListPage,
    HeroViewPage
  ],
})
export class HeroModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListPage } from './hero-list/hero-list.page';
import { HeroViewPage } from './hero-view/hero-view.page';
import { HeroDetailedCardComponent } from '../shared/hero-detailed-card/hero-detailed-card.component';
import { HeroItemComponent } from '../shared/hero-item/hero-item.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HeroRoutingModule,
    FormsModule
  ],
  declarations: [
    HeroListPage,
    HeroViewPage,
    HeroDetailedCardComponent,
    HeroItemComponent
  ],
  exports: [
    HeroItemComponent
  ]
})
export class HeroModule { }

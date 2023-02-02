import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NotFound404PageRoutingModule } from './extrapages-routing.module';
import { NotFound404Page } from './not-found404/not-found404.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NotFound404PageRoutingModule
  ],
  declarations: [NotFound404Page]
})
export class NotFound404PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SidemenuComponent]
})
export class LayoutModule { }

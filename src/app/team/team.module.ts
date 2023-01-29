import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TeamPageRoutingModule } from './team-routing.module';
import { TeamPage } from './team.page';
import { EditInfoModalComponent } from './components/edit-info-modal/edit-info-modal.component';
import { HeroModule } from '../hero/hero.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamPageRoutingModule,
    ReactiveFormsModule,
    HeroModule
  ],
  declarations: [
    TeamPage,
    EditInfoModalComponent
  ]
})
export class TeamPageModule {}

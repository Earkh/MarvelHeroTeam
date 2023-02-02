import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TeamPageRoutingModule } from './team-routing.module';
import { TeamPage } from './team.page';
import { EditInfoModalComponent } from './components/edit-info-modal/edit-info-modal.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    TeamPage,
    EditInfoModalComponent
  ]
})
export class TeamPageModule {}

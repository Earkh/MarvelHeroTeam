import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { TeamService } from './services/team.service';
import { EditInfoModalComponent } from './components/edit-info-modal/edit-info-modal.component';
import { LayoutService } from '../../layouts/services/layout.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  team$: Observable<any>
  teamMaxLength = environment.TEAM_MAX_LENGTH;

  constructor(
    private teamService: TeamService,
    private layoutService: LayoutService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.team$ = this.teamService.team$;
  }

  ionViewWillEnter() {
    this.layoutService.setFullPageLayout();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: EditInfoModalComponent,
      cssClass: 'auto-height',
    });
    return await modal.present();
  }

}

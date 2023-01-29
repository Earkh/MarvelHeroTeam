import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TeamService } from './services/team.service';
import { EditInfoModalComponent } from './components/edit-info-modal/edit-info-modal.component';
import { environment } from '../../environments/environment';

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
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.team$ = this.teamService.team$;
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: EditInfoModalComponent,
      cssClass: 'auto-height',
    });
    return await modal.present();
  }

}

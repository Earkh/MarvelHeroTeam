import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TeamService } from './services/team.service';
import { EditInfoModalComponent } from './components/edit-info-modal/edit-info-modal.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  team$: Observable<any>

  constructor(
    private teamService: TeamService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.team$ = this.teamService.team$;
  }

  removeHero(hero: any) {
    this.teamService.removeHero(hero);
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: EditInfoModalComponent,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

}

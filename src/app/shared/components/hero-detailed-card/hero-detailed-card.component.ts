import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { TeamService } from '../../../features/team/services/team.service';
import { AlertService } from '../../services/alert.service';
import { IHero } from '../../../features/hero/interfaces/hero.interface';

@Component({
  selector: 'app-hero-detailed-card',
  templateUrl: './hero-detailed-card.component.html',
  styleUrls: ['./hero-detailed-card.component.scss'],
})
export class HeroDetailedCardComponent implements OnInit, OnDestroy{

  @Input() hero: IHero;
  team: IHero[];
  teamSubs: Subscription;

  constructor(
    private teamService: TeamService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.teamSubs = this.teamService.team$.subscribe(data => {
      this.team = data.heroes
    });
  }

  addHeroToTeam(hero: IHero) {
    this.teamService.addHero(hero);
    this.alertService.presentSimpleAlert({subheader: 'Héroe añadido correctamente'})
  }

  removeHero(hero: any) {
    this.alertService.presentConfirmationAlert({subheader: '¿Eliminar al Héroe del equipo?'}).then(data => {
      if (data) {
        this.teamService.removeHero(hero);
      }
    })
  }

  isHeroAlreadyInTeam(hero: IHero): boolean {
    return this.team.some(teamHero => teamHero.id === hero.id)
  }

  get isTeamComplete(): boolean {
    return this.team.length >= environment.TEAM_MAX_LENGTH;
  }

  ngOnDestroy() {
    this.teamSubs.unsubscribe();
  }

}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHero } from '../../hero/interfaces/hero.interface';
import { environment } from '../../../environments/environment';
import { TeamService } from '../../team/services/team.service';

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
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teamSubs = this.teamService.team$.subscribe(data => {
      this.team = data.heroes
    });
  }

  addHeroToTeam(hero: IHero) {
    this.teamService.addHero(hero)
  }

  removeHero(hero: any) {
    this.teamService.removeHero(hero);
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

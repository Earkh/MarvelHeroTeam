import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { HeroService } from '../services/hero.service';
import { TeamService } from '../../team/services/team.service';
import { IHero } from '../interfaces/hero.interface';
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.page.html',
  styleUrls: ['./hero-view.page.scss'],
})
export class HeroViewPage implements OnInit, OnDestroy {

  hero$: Observable<IHero>;
  team: IHero[];
  teamSubs: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.hero$ = this.activatedRoute.paramMap
      .pipe(
        switchMap(({params}: Params) => {
          return this.heroService.getHero(Number(params.id));
        })
      );
    this.teamSubs = this.teamService.team$.subscribe(data => {
      this.team = data.heroes
    });
  }

  addHeroToTeam(hero: IHero) {
    if (!this.isHeroAlreadyInTeam(hero) && !this.isTeamComplete) {
      this.teamService.addHero(hero)
    }
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

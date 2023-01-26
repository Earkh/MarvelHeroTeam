import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HeroService } from '../services/hero.service';
import { TeamService } from '../../team/services/team.service';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.page.html',
  styleUrls: ['./hero-view.page.scss'],
})
export class HeroViewPage implements OnInit {

  hero$: Observable<any>;

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
  }

  addHeroToTeam(hero: any) {
    this.teamService.addHero(hero)
  }

}

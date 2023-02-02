import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { ITeam, ITeamDataForm } from '../interfaces/team.interface';
import { HeroService } from '../../hero/services/hero.service';
import { IHero } from '../../hero/interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _team$ = new BehaviorSubject<any>({
    name: 'MiEquipo',
    desc: '...',
    heroes: []
  });
  private _storedTeam$ = new BehaviorSubject<number[]>([]);

  get team$(): Observable<ITeam | any> {
    return this._team$;
  }

  constructor(
    private heroService: HeroService
  ) {
    if (localStorage.hasOwnProperty('heroTeam')) {
      this._storedTeam$.next(JSON.parse(localStorage.getItem('heroTeam')!));
      forkJoin(this._storedTeam$.getValue().map(heroId => this.heroService.getHero(heroId)))
        .subscribe(heroArray => {
          this._team$.next({
            ...this._team$.getValue(),
            heroes: [...heroArray]
          })
        })
    }
    if (localStorage.hasOwnProperty('teamInfo')) {
      let { name, desc } = JSON.parse(localStorage.getItem('teamInfo')!)
      this._team$.next({
        ...this._team$.getValue(),
        name,
        desc
      })
    }
  }

  addHero(hero: IHero): void {
    this._team$.next({
      ...this._team$.getValue(),
      heroes: [...this._team$.getValue().heroes, hero]
    })
    localStorage.setItem('heroTeam', JSON.stringify(this._team$.getValue().heroes.map((hero: IHero) => hero.id)))
  }

  removeHero(hero: IHero): void {
    this._team$.next({
      ...this._team$.getValue(),
      heroes: this._team$.getValue().heroes.filter((teamHero: IHero) => teamHero.id !== hero.id)
    })
    localStorage.setItem('heroTeam', JSON.stringify(this._team$.getValue().heroes.map((hero: IHero) => hero.id)))
  }

  editTeamInfo(teamInfo: ITeamDataForm) {
    this._team$.next({
      ...this._team$.getValue(),
      name: teamInfo.name,
      desc: teamInfo.desc
    })
    localStorage.setItem('teamInfo', JSON.stringify({name: this._team$.getValue().name, desc: this._team$.getValue().desc}))
  }

}

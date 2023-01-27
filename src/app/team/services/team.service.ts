import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITeam, ITeamDataForm } from '../interfaces/team.interface';
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

  get team$(): Observable<ITeam | any> {
    return this._team$;
  }

  constructor() { }

  addHero(hero: IHero): void {
    this._team$.next({
      ...this._team$.getValue(),
      heroes: [...this._team$.getValue().heroes, hero]
    })
  }

  removeHero(hero: IHero): void {
    this._team$.next({
      ...this._team$.getValue(),
      heroes: this._team$.getValue().heroes.filter((teamHero: IHero) => teamHero.id !== hero.id)
    })
  }

  editTeamInfo(teamInfo: ITeamDataForm) {
    this._team$.next({
      ...this._team$.getValue(),
      name: teamInfo.name,
      desc: teamInfo.desc
    })
  }

}

import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IUser} from "../../auth/interfaces/auth.interface";
import {ITeamDataForm} from "../interfaces/team.interface";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _team$ = new BehaviorSubject<any>({
    name: 'MiEquipo',
    desc: '...',
    heroes: []
  });

  get team$(): Observable<IUser | any> {
    return this._team$;
  }

  constructor() { }

  addHero(hero: any): void {
    if (!this._team$.getValue().heroes.includes(hero)) {
      this._team$.next({
        ...this._team$.getValue(),
        heroes: [...this._team$.getValue().heroes, hero]
      })
    }
  }

  removeHero(hero: any): void {
    this._team$.next(this._team$.getValue().heroes.filter((teamHero: any) => teamHero.id !== hero.id))
  }

  editTeamInfo(teamInfo: ITeamDataForm) {
    this._team$.next({
      ...this._team$.getValue(),
      name: teamInfo.name,
      desc: teamInfo.desc
    })
  }

}

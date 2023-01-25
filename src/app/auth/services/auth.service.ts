import { Injectable } from '@angular/core';
import {IUser} from '../interfaces/auth.interface';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  FAKE_EMAIL = 'pepelopez@email.com';
  FAKE_PASSWORD = '123456';

  private _user$ = new BehaviorSubject<IUser | null>(null)

  constructor() { }

  get user$(): Observable<IUser | any> {
    return this._user$;
  }

  simulatedLogin(userData: any): boolean {
    if  (userData.email === this.FAKE_EMAIL && userData.password === this.FAKE_PASSWORD) {
      this._user$.next({
        id: 1,
        email: this.FAKE_EMAIL,
        name: 'Pepe López'
      });
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this._user$.next(null);
  }
}

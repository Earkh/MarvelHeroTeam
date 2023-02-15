import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../interfaces/auth.interface';
import { LayoutService } from '../../../layouts/services/layout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  FAKE_EMAIL = 'pepelopez@email.com';
  FAKE_PASSWORD = '123456';

  private _user$ = new BehaviorSubject<IUser | null>(null)

  constructor(
    private router: Router,
    private layoutService: LayoutService
  ) {
    if (localStorage.hasOwnProperty('user')) {
      const userData: IUser = JSON.parse(localStorage.getItem('user')!);
      this._user$.next(userData);
    }
  }

  get user$(): Observable<IUser | any> {
    return this._user$;
  }

  simulatedLogin(userData: any): boolean {
    if  (userData.email === this.FAKE_EMAIL && userData.password === this.FAKE_PASSWORD) {
      const userData = {
        id: 1,
        email: this.FAKE_EMAIL,
        name: 'Pepe López'
      }
      this._user$.next(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      this.router.navigate(['/hero'])
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this._user$.next(null);
    localStorage.removeItem('user');
    this.layoutService.setLoginLayout();
    window.location.reload();
  }
}

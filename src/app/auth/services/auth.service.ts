import { Injectable } from '@angular/core';
import {IUser} from "../interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userData: IUser): boolean {
    return userData.email === 'user1@tmail.com' && userData.password === '123456';
  }
}

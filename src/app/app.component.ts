import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from './auth/interfaces/auth.interface';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public appPages = [
    { title: 'Heroes', url: '/hero', icon: 'list' },
    { title: 'Gestión equipo', url: '/team', icon: 'accessibility' },
    { title: 'Logout', url: '/auth', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  user$: Observable<IUser>

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}

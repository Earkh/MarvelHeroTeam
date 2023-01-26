import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { TeamService } from './team/services/team.service';
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
  user$: Observable<IUser>
  team$: Observable<any>

  constructor(
    private authService: AuthService,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
    this.team$ = this.teamService.team$;
  }
}

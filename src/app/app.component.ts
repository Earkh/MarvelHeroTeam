import {Component, OnChanges, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { TeamService } from './team/services/team.service';
import { IUser } from './auth/interfaces/auth.interface';
import {ITeam} from "./team/interfaces/team.interface";



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {

  public appPages = [
    { title: 'Heroes', url: '/hero', icon: 'list' },
    { title: 'Gestión equipo', url: '/team', icon: 'accessibility' },
  ];
  user$: Observable<IUser>
  team$: Observable<ITeam>

  constructor(
    private authService: AuthService,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
    this.team$ = this.teamService.team$;
  }

  ngOnChanges() {
    console.log('onChange -> Team: ', this.team$);
  }

  logout() {
    this.authService.logout();
  }
}

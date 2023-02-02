import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LayoutService } from '../../services/layout.service';
import { TeamService } from '../../../features/team/services/team.service';
import { AuthService } from '../../../features/auth/services/auth.service';
import { IUser } from '../../../features/auth/interfaces/auth.interface';
import { ITeam } from '../../../features/team/interfaces/team.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  public appPages = [
    { title: 'Heroes', url: '/hero', icon: 'list' },
    { title: 'Gestión equipo', url: '/team', icon: 'accessibility' },
  ];
  user$: Observable<IUser>
  team$: Observable<ITeam>

  constructor(
    private authService: AuthService,
    private layoutService: LayoutService,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.user$ = this.authService.user$;
    this.team$ = this.teamService.team$;
  }

  logout() {
    this.authService.logout();
  }

}

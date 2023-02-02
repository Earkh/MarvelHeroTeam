import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutConfig, LayoutService } from './layouts/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  layoutConfig$: Observable<LayoutConfig>;

  constructor(
    private layoutService: LayoutService
  ) {
    this.layoutConfig$ = this.layoutService.config();
  }

}

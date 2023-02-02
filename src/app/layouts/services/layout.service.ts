import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HeaderComponent } from 'src/app/layouts/components/header/header.component';

export class LayoutConfig { header: any; layout: any }

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _config = new BehaviorSubject<LayoutConfig>({
    header: null, layout: null
  });

  config(): Observable<LayoutConfig> {
    return this._config.asObservable();
  }

  setConfig(config: LayoutConfig) {
    this._config.next(config);
  }

  setLoginLayout() {
    this.setConfig({ header: null, layout: null });
  }

  setFullPageLayout() {
    this.setConfig({ header: HeaderComponent, layout: null });
  }

}

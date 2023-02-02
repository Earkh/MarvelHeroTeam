import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, Observable, of, Subject, switchMap } from 'rxjs';
import { HeroService } from '../services/hero.service';
import { IHero } from '../interfaces/hero.interface';
import { LayoutService } from '../../../layouts/services/layout.service';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.page.html',
  styleUrls: ['./hero-view.page.scss'],
})
export class HeroViewPage implements OnInit {

  hero$: Observable<IHero>;
  error$ = new Subject<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private layoutService: LayoutService,
    private location: Location
  ) { }

  ngOnInit() {
    this.hero$ = this.activatedRoute.paramMap
      .pipe(
        switchMap(({params}: Params) => {
          return this.heroService.getHero(Number(params.id));
        }),
          catchError((error) => {
            this.error$.next(true);
            return of();
          })
      );
  }

  goBack() {
    this.location.back()
  }

  ionViewWillEnter() {
    this.layoutService.setFullPageLayout();
  }

}

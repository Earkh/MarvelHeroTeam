import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import {environment} from '../../../../environments/environment';
import { IHero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  API_KEY = environment.MARVEL_TOKEN;
  API_URL = 'https:gateway.marvel.com/v1/public/'

  constructor(private http: HttpClient) { }

  getAllHeroes(limit: number, offset: number): Observable<IHero[]> {
    return this.http.get<IHero[]>(`${this.API_URL}characters?ts=1&limit=${limit}&offset=${offset}&apikey=${this.API_KEY}`)
      .pipe(
        map((data: any) => data.data.results)
      )
  }

  getHeroesByName(heroName: string): Observable<IHero[]> {
    return this.http.get<IHero[]>(`${this.API_URL}characters?ts=1&apikey=${this.API_KEY}&nameStartsWith=${heroName}`)
      .pipe(
        map((data: any) => data.data.results)
      )
  }

  getHero(heroId: number): Observable<IHero> {
    return this.http.get<IHero>(`${this.API_URL}characters/${heroId}?ts=1&apikey=${this.API_KEY}`)
      .pipe(
        map((data: any) => data.data.results[0])
      )
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  API_KEY = environment.MARVEL_TOKEN;
  API_URL = 'https:gateway.marvel.com/v1/public/'

  constructor(private http: HttpClient) { }

  getAllHeroes(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}characters?ts=1&apikey=${this.API_KEY}`)
      .pipe(
        map((data: any) => data.data.results)
      )
  }

  getHeroesByName(heroName: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}characters?ts=1&apikey=${this.API_KEY}&nameStartsWith=${heroName}`)
      .pipe(
        map((data: any) => data.data.results)
      )
  }

  getHero(heroId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}characters/${heroId}?ts=1&apikey=${this.API_KEY}`)
      .pipe(
        map((data: any) => data.data.results[0])
      )
  }

}

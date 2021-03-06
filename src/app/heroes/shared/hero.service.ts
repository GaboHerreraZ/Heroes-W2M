import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = `${environment.api.endPoint}/heroes`;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Hero>{
    const id = route.params['id'];
    return this.getHeroById(id);
  }


  getHeroByName(name: string): Observable<Hero[]>{
    const url = `${this.URL}?nickName_like=${name}`;
    return this.http.get<Hero[]>(url);
  }

  deleteHeroById(id: number): Observable<Boolean> {
    const url = `${this.URL}/${id}`;
    return this.http.delete<Boolean>(url);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.URL, hero);
  }

  editHero(hero: Hero): Observable<Hero> {
    const url = `${this.URL}/${hero.id}`;
    return this.http.put<Hero>(url, hero);
  }


  getHeroById(id: number): Observable<Hero> {
    const url = `${this.URL}/${id}`
    return this.http.get<Hero>(url);
  }

}
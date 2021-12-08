import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { filter, map, mergeMap, startWith, tap } from 'rxjs/operators';
import { HeroMessageComponent } from '../hero-message/hero-message.component';
import { HeroActions } from '../shared/hero.actions';

import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';
import { HeroTable } from '../shared/hero.table';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit, OnDestroy {

  columnsTable = HeroTable; 
  dataHero$: Observable<MatTableDataSource<Hero>>;
  displayedColumns = ['id','name', 'nickName', 'age', 'company', 'power', 'height', 'Acciones'];
  actions = HeroActions;
  searchByName =  new BehaviorSubject('');
  searchByName$ = this.searchByName.asObservable();
  subscription = new Subscription();

  constructor(private heroService: HeroService,
              private router: Router,
              private dialog: MatDialog,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.search();
  }

  getHeroesByName(name: string): Observable<MatTableDataSource<Hero>> {
    return this.heroService.getHeroByName(name).pipe(
            map((result: Hero[]) =>  new MatTableDataSource(result)));;
  }

  doAction(action: any): void {
    switch (action.actionName) {
      case 'edit':
        this.editHero(action.hero.id);
        break;
      default:
        this.deleteHero(action.hero);
        break;
    }
  }

  addHero(): void {
    this.router.navigate(['create'], { relativeTo: this.activeRoute})
  }

  search() {
   this.dataHero$ =  this.searchByName$.pipe(
                         mergeMap(name => this.getHeroesByName(name))); 
  }

  searcHeroByName(name: string): void {
    this.searchByName.next(name);
  }

  deleteHero(hero: Hero): void {
   const dialogRef = this.dialog.open(HeroMessageComponent, {
      data: hero
    });

   this.subscription.add(dialogRef.afterClosed().pipe(
      filter(result => result),
      mergeMap(() => {
        return this.heroService.deleteHeroById(hero.id);
      })
    ).subscribe(()=> {
      this.searchByName.next('');
    }));
  } 

  private editHero(id: number): void {
    this.router.navigate(['edit', id], { relativeTo: this.activeRoute})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

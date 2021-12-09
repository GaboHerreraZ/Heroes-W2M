import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit , OnDestroy{

  heroForm: FormGroup;
  private subscription =  new Subscription();
  hero: Hero;
  edit = false;

  constructor(private fb: FormBuilder,
              private heroService: HeroService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  submitForm(): void {
    if(this.heroForm.invalid) {
      this.heroForm.markAllAsTouched();
      return;
    }
    const hero: Hero = this.heroForm.value;
    if(this.edit) {
      this.editHero(hero);
    } else {
      this.addHero(hero);
    }
  }

  private getForm(): void {
    this.heroForm = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        nickName: ['', Validators.required],
        age: ['', Validators.required],
        company: ['', Validators.required],
        power: ['', Validators.required],
        height: ['', Validators.required]
    });
  }

  private editHero(hero: Hero): void {
    this.subscription.add(this.heroService.editHero(hero).subscribe(
      () => {
        this.heroForm.reset();
        this.router.navigate(['/hero'],  { relativeTo: this.activeRoute });
      }
    )); 
  }

  private addHero(hero: Hero): void {
    this.subscription.add(this.heroService.addHero(hero).subscribe(
      () => {
        this.heroForm.reset();
        this.router.navigate(['/hero'],  { relativeTo: this.activeRoute });
      }
    ));
  }

  private getHero(): void {
    this.subscription.add(this.activeRoute.data.pipe(
        tap(()=> this.getForm()),
        map(data => data.data)
      ).subscribe(
        result => {
          if(result){
            this.edit = !this.edit;
            this.hero = result;
            this.heroForm.patchValue(result);
          }
        }
      ));
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}




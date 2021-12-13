import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { HeroListComponent } from '../../hero-list/component/hero-list.component';
import { Hero } from '../../shared/hero.model';
import { HeroService } from '../../shared/hero.service';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  let activatedRoute: ActivatedRoute;
  let router: Router;

  

  let heroService: HeroService;

  let hero: Hero = {
      id: 2,
      name: "Bruce Wayne",
      nickName: "Batman",
      age: 45,
      company: "Dc Comics",
      power: "Hombre murcileago",
      height: 190
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {
            path: 'hero',
            component: HeroListComponent
          }
        ]),
        TranslateModule.forRoot()
      ],
      declarations: [ HeroComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of(hero)
          }
        },
        HeroService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    heroService = fixture.debugElement.injector.get(HeroService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[submitForm] Submit form', fakeAsync(() => {
    const spy = spyOn(router, 'navigate');
    const spyEditHero=  spyOn(heroService, 'editHero').and.returnValue(of(hero));
    const spyAddHero=  spyOn(heroService, 'addHero').and.returnValue(of(hero));

    component.submitForm();
    let invalid = component.heroForm.invalid;
    expect(invalid).toBeTrue();

    component.edit = true;
    component.heroForm.patchValue(hero);
    component.submitForm();
    tick();

    
    expect(spyEditHero).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(['/hero'], { relativeTo: activatedRoute});
    
    component.edit = false;
    component.heroForm.patchValue(hero);
    component.submitForm();
    tick();

    expect(spyAddHero).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(['/hero'], { relativeTo: activatedRoute});
     
  }));

  it('[editHero] Edit hero', fakeAsync(() => {
    const spy = spyOn(router, 'navigate');
    const spyEditHero=  spyOn(heroService, 'editHero').and.returnValue(of(hero));
    (component as any).editHero(hero);
    tick();
    expect(spyEditHero).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(['/hero'], { relativeTo: activatedRoute});
  }));


  it('[addHero] Add new hero', fakeAsync(() => {
    const spy = spyOn(router, 'navigate');
    const spyEditHero=  spyOn(heroService, 'addHero').and.returnValue(of(hero));
    (component as any).addHero(hero);
    tick();
    expect(spyEditHero).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(['/hero'], { relativeTo: activatedRoute});
  }));

  




});

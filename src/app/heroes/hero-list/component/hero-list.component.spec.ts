import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { HeroComponent } from '../../hero/component/hero.component';
import { Hero } from '../../shared/hero.model';
import { HeroService } from '../../shared/hero.service';

import { HeroListComponent } from './hero-list.component';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

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

  let action =  {
    hero: hero,
    actionName: 'edit'
  };

  const DialogMock = {
    open() {
      return {
        afterClosed: () => of(true)
      }
    }
  }
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: 'hero/edit/:id',
            component: HeroComponent
          },
          {
            path: 'create',
            component: HeroComponent
          }
        ]),
        MatDialogModule,
        TranslateModule.forRoot()
      ],
      declarations: [ HeroListComponent ],
      providers: [
        TranslateService,
        {
          provide: MatDialog,
          useValue: DialogMock
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    
    router = TestBed.inject(Router);
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    
    heroService = fixture.debugElement.injector.get(HeroService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[doAction] Do action edit', () => {
    const spy = spyOn(router, 'navigate');
    const actionEdit = {
      hero: hero,
      actionName: 'edit'
    };
    component.doAction(actionEdit);
    expect(spy).toHaveBeenCalledWith(['edit', 2], { relativeTo: activatedRoute});
  });

  it('[editHero] Navigate to edit hero', () => {
    const spy = spyOn(router, 'navigate');
    (component as any).editHero(1);
    expect(spy).toHaveBeenCalledWith(['edit', 1], { relativeTo: activatedRoute});

  });

  it('[editHero] Navigate to edit hero', () => {
    const spy = spyOn(router, 'navigate');
    (component as any).editHero(1);
    expect(spy).toHaveBeenCalledWith(['edit', 1], { relativeTo: activatedRoute});
  });

  it('[deleteHero] Delete hero from list', fakeAsync(() => {
    const spyDeleteHero = spyOn(heroService, 'deleteHeroById').and.returnValue(of(true));
    component.deleteHero(hero);
    tick();
    expect(spyDeleteHero).toHaveBeenCalled();
  }));

  it('[addHero] Navigate to add new hero', () => {
    const spy = spyOn(router, 'navigate');
    (component as any).addHero();
    expect(spy).toHaveBeenCalledWith(['create'], { relativeTo: activatedRoute});
  });

  it('[doAction] Do action delete hero', fakeAsync(() => {
    const spyDeleteHero = spyOn(heroService, 'deleteHeroById').and.returnValue(of(true));
    action.actionName = 'other'
    component.doAction(action);
    tick(); 
    expect(spyDeleteHero).toHaveBeenCalled();
  }));
});
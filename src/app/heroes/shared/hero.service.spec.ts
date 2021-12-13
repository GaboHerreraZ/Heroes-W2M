import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { Hero } from './hero.model';
import { environment } from 'src/environments/environment';

describe('HeroService', () => {
  let service: HeroService;
  let httpMock : HttpTestingController;
  let heroes: Hero[] = [
    {
      id: 2,
      name: "Bruce Wayne",
      nickName: "Batman",
      age: 45,
      company: "Dc Comics",
      power: "Hombre murcileago",
      height: 190
    },
    {
      id: 3,
      name: "Dr Henry Hank Pym",
      nickName: "Ant man",
      age: 60,
      company: "Marvel",
      power: "Controla las hormigas",
      height: 175
    }
  ];
 
  let URL = `${environment.api.endPoint}/heroes`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HeroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterAll( () => {
    httpMock.verify();
  });

  
  it('[getHeroByName] Get heroes list by name', () => {
    const name = 'Batman'
    service.getHeroByName(name).subscribe((res: Hero[]) => {
      expect(res).toEqual(heroes);
      expect(res.length).toEqual(2);
    });
      const req = httpMock.expectOne( `${URL}?nickName_like=${name}`);
      expect(req.request.method).toBe('GET');
      req.flush(heroes);
  });


  it('[deleteHeroById] delete hero of heroes list', () => {
    const id = 1;
    service.deleteHeroById(id).subscribe(res => {
      expect(res).toEqual(true);
    });
      const req = httpMock.expectOne( `${URL}/${id}`);
      expect(req.request.method).toBe('DELETE');
      req.flush(true);
  });

  it('[addHero] Add new hero', () => {
    service.addHero(heroes[0]).subscribe((res: Hero) => {
      expect(res).toEqual(heroes[0]);
    });
      const req = httpMock.expectOne( `${URL}`);
      expect(req.request.method).toBe('POST');
      req.flush(heroes[0]);
  });


  it('[editHero] Edit hero', () => {
    service.editHero(heroes[0]).subscribe((res: Hero) => {
      expect(res).toEqual(heroes[0]);
    });
      const req = httpMock.expectOne( `${URL}/${heroes[0].id}`);
      expect(req.request.method).toBe('PUT');
      req.flush(heroes[0]);
  });


  it('[getHeroById] Get hero by id', () => {
    const id= 1;
    service.getHeroById(1).subscribe((res: Hero) => {
      expect(res).toEqual(heroes[0]);
    });
      const req = httpMock.expectOne( `${URL}/${id}`);
      expect(req.request.method).toBe('GET');
      req.flush(heroes[0]);
  });
  
});

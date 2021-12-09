import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('[startLoading] Start loading', () => {
    service.startLoading();
    expect(service.loading).toEqual(true);
  });

  it('[stopLoading] Stop loading', () => {
    service.stopLoading();
    expect(service.loading).toEqual(false);
  });


});

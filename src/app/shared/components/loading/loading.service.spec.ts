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

  it('should be loading', () => {
    service.show();

    expect(service.isLoading$).toBeTruthy();
  });

  it('should not be loading', () => {
    service.hide();

    expect(service.isLoading$).toBeTruthy();
  });
});

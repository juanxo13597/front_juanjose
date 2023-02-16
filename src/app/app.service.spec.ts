import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AppService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true init', (done: DoneFn) => {
    service.init().subscribe({
      next: (data) => {
        expect(data).toBeTruthy();
        done();
      },
    });

    const req = httpTestingController.expectOne('/api/init');

    expect(req.request.method).toEqual('GET');

    req.flush(true);
  });
});

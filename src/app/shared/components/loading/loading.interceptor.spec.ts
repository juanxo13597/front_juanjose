/* eslint-disable jasmine/prefer-toHaveBeenCalledWith */
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

import { LoadingInterceptor } from './loading.interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

describe('LoadingInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let loadingService: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoadingInterceptor,
        LoadingService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingInterceptor,
          multi: true,
        },
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    loadingService = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);

    expect(interceptor).toBeTruthy();
  });

  it('should show and hide loading indicator', () => {
    spyOn(loadingService, 'show');
    spyOn(loadingService, 'hide');

    http.get('/api/data').subscribe();

    const req = httpMock.expectOne('/api/data');

    expect(req.request.method).toEqual('GET');

    req.flush({});

    expect(loadingService.show).toHaveBeenCalled();
    expect(loadingService.hide).toHaveBeenCalled();
  });
});

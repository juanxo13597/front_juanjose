import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthHttpService } from './auth-http.service';

describe('AuthHttpService', () => {
  let service: AuthHttpService;
  let httpTestingController: HttpTestingController;
  const date = new Date();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('send data register', (done: DoneFn) => {
    service
      .register({
        name: 'name',
        surname: 'surname',
        email: 'email',
        password: 'password',
        password_confirmation: 'password_confirmation',
      })
      .subscribe({
        next: (data) => {
          expect(data).toEqual({
            name: 'name',
            surname: 'surname',
            email: 'email',
            id: 1,
            created_at: date,
            updated_at: date,
          });
          done();
        },
      });

    const req = httpTestingController.expectOne('/api/auth/register');

    expect(req.request.method).toEqual('POST');

    req.flush({
      name: 'name',
      surname: 'surname',
      email: 'email',
      id: 1,
      created_at: date,
      updated_at: date,
    });
  });
});

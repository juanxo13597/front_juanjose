import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/auth/services/auth.service';

import { AccessTokenInterceptor } from './access-token.interceptor';

describe('AccessTokenInterceptor', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AccessTokenInterceptor,
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AccessTokenInterceptor,
          multi: true,
        },
      ],
    });
    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    const interceptor: AccessTokenInterceptor = TestBed.inject(
      AccessTokenInterceptor
    );

    expect(interceptor).toBeTruthy();
  });

  it('debería agregar el token de autenticación en la cabecera de la solicitud', () => {
    const token = 'mi_token_de_autenticacion';
    spyOn(authService, 'getToken').and.returnValue(token);

    http.get('https://mi-servicio/api/protegido').subscribe();

    const httpRequest = httpMock.expectOne('https://mi-servicio/api/protegido');

    expect(httpRequest.request.headers.has('Authorization')).toBeTrue();
    expect(httpRequest.request.headers.get('Authorization')).toBe(
      `Bearer ${token}`
    );
  });

  it('no debería agregar el token de autenticación si no hay un token', () => {
    spyOn(authService, 'getToken').and.returnValue('');

    http.get('https://mi-servicio/api/protegido').subscribe();

    const httpRequest = httpMock.expectOne('https://mi-servicio/api/protegido');

    expect(httpRequest.request.headers.has('Authorization')).toBeFalse();
  });
});

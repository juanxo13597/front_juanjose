import { AuthService } from './../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { constants } from '../constants/constants';

/** access token interceptor */
@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
  /** constructor */
  constructor(private readonly AuthService: AuthService) {}

  /** interceptor */
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.AuthService.getToken();
    if (token && token !== '' && !this.noTokenRoutes(request.url)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next
      .handle(request)
      .pipe(catchError((error) => this.handleError(error)));
  }

  /** rutas sin token */
  private noTokenRoutes(url: string): boolean {
    return url.search(constants.routesOutToken.join('|')) > -1;
  }

  /** handler error */
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      console.log('error 401 - token invalido');
    }

    return throwError(error);
  }
}

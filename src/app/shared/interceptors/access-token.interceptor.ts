import { AuthService } from './../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from '../constants/constants';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
  constructor(private readonly AuthService: AuthService) {}

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

    return next.handle(request);
  }

  /** rutas sin token */
  private noTokenRoutes(url: string): boolean {
    return url.search(constants.routesOutToken.join('|')) > -1;
  }
}

import { LoadingService } from './loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

/** interceptor de loading */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  /** constructor */
  constructor(private readonly LoadingService: LoadingService) {}

  /** interceptor */
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.LoadingService.show();
    return next
      .handle(request)
      .pipe(finalize(() => this.LoadingService.hide()));
  }
}

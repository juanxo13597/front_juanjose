import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/** serviço de loading */
@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  /** loading */
  isLoading$ = new Subject<boolean>();

  /** mostrar loading */
  show() {
    this.isLoading$.next(true);
  }

  /** esconder loading */
  hide() {
    this.isLoading$.next(false);
  }
}

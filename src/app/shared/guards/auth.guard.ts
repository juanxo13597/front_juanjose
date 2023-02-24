import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppState } from '../../../app/app.state';

/** auth guard */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /** constructor */
  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private store: Store<AppState>
  ) {}

  /** comprobar si esta logueado */
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store
      .select((appState) => appState.auth.login)
      .pipe(
        map((authUser) => {
          if (route.data && route.data['auth'] === undefined) {
            if (!authUser) {
              this.Router.navigate(['/']);
              return false;
            } else {
              return true;
            }
          }
          if (!authUser) {
            return true;
          }
          this.Router.navigate(['/']);
          return false;
        })
      );
  }
}

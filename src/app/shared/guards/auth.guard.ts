import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /** constructor */
  constructor(private AuthService: AuthService, private Router: Router) {}

  /** comprobar si esta logueado */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (route.data && route.data['auth'] === undefined) {
      if (this.AuthService.getUser().id === 0) {
        this.Router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    }

    if (this.AuthService.getUser().id === 0) {
      return true;
    }
    this.Router.navigate(['/']);
    return false;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /** constructor */
  constructor(private AuthService: AuthService, private Router: Router) {}

  /** comprobar si esta logueado */
  canActivate(): boolean {
    if (this.AuthService.getUser().id === 0) {
      return true;
    }
    this.Router.navigate(['/']);
    return false;
  }
}

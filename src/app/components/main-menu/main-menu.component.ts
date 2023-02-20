import { AuthService } from './../../auth/services/auth.service';
import { environment } from './../../../environments/environment';
import { Component } from '@angular/core';

/** componente de menu principal */
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  /** info de la aplicacion */
  public info = environment.info;

  /** user */
  public user = this.AuthService.getUser();

  /** constructor */
  constructor(private AuthService: AuthService) {
    this.AuthService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}

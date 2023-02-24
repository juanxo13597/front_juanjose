import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { authModel } from 'src/app/state/auth/auth.model';
import { AuthService } from './../../auth/services/auth.service';

/** menu derecho */
@Component({
  selector: 'app-main-menu-right',
  templateUrl: './main-menu-right.component.html',
  styleUrls: ['./main-menu-right.component.scss'],
})
export class MainMenuRightComponent {
  /** user */
  /** user */
  public user: authModel = {
    user: {
      id: 0,
      name: '',
      email: '',
      updated_at: new Date(),
      created_at: new Date(),
      surname: '',
    },
    login: false,
    access_token: '',
  };

  /** constructor */
  constructor(
    private AuthService: AuthService,
    private store: Store<AppState>
  ) {
    this.store.select('auth').subscribe((res) => {
      this.user = res;
    });
  }

  /** logout */
  logout(): void {
    this.AuthService.stateAuthLogout();
  }
}

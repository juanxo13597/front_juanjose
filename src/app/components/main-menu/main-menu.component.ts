import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { authModel } from 'src/app/state/auth/auth.model';
import { environment } from './../../../environments/environment';

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
  constructor(private store: Store<AppState>) {
    this.store.select('auth').subscribe((res) => {
      this.user = res;
    });
  }
}

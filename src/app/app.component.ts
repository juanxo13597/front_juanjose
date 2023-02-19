import { LoadingService } from './shared/components/loading/loading.service';
import { AuthService } from '../app/auth/services/auth.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './app.service';
import { languages } from './shared/constants/constants';

/** componente root */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /** loading */
  loading = true;

  /** constructor */
  constructor(
    private translate: TranslateService,
    private appService: AppService,
    private AuthService: AuthService
  ) {
    this.translate.addLangs(languages);
    this.translate.setDefaultLang('es');

    this.isBackActive();
  }

  /** comprobar si back esta activo */
  isBackActive() {
    this.appService.init().subscribe((res) => {
      if (res.user) {
        this.AuthService.setUser(res.user);
      }
      this.loading = false;
    });
  }
}

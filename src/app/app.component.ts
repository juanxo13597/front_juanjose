import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './app.service';

/** componente root */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /** loading app */
  loading = true;

  /** constructor */
  constructor(
    private translate: TranslateService,
    private appService: AppService
  ) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');

    this.isBackActive();
  }

  /** comprobar si back esta activo */
  isBackActive() {
    this.appService.init().subscribe({
      next: () => {
        this.loading = false;
      },
    });
  }
}

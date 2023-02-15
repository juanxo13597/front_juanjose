import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
    private HttpClient: HttpClient
  ) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');

    this.isBackActive();
  }

  /** comprobar si back esta activo */
  isBackActive() {
    this.HttpClient.get(environment.api + 'init').subscribe({
      next: () => {
        this.loading = false;
      },
    });
  }
}

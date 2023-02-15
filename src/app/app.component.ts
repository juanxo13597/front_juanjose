import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/** componente root */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /** constructor */
  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
  }
}

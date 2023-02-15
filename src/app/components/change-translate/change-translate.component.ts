import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

/** componente para cambiar de idioma */
@Component({
  selector: 'app-change-translate',
  templateUrl: './change-translate.component.html',
  styleUrls: ['./change-translate.component.scss'],
})
export class ChangeTranslateComponent {
  /** constructor */
  constructor(
    /** servicio de traducciones */
    public translate: TranslateService
  ) {}

  /** cambiar de idioma */
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}

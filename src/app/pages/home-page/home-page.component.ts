import { constants } from './../../shared/constants/constants';
import { environment } from './../../../environments/environment';
import { Component } from '@angular/core';

/** pagina de inicio */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  /** info */
  info = environment.info;

  /** urls */
  urls = constants.github;

  /** url api */
  urlApi = environment.api;
}

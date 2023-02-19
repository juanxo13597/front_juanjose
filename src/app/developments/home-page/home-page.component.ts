import { developments } from './../../shared/constants/developments.constant';
import { Component } from '@angular/core';

/** pagina de inicio */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  developments = developments;
}

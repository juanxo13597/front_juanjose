import { environment } from './../../../environments/environment';
import { Component } from '@angular/core';

/** footer component */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  /** name app */
  info = environment.info;

  /** date */
  currentDate: Date = new Date();
}

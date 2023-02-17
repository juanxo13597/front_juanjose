import { Component, Input } from '@angular/core';

/** alerta */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  /** color */
  @Input() color = 'success';

  /** texto */
  @Input() text = '';
}

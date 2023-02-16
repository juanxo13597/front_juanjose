import { Component, Input } from '@angular/core';

/** componente de loading */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  /** color del loading */
  @Input() color = 'dark';
}

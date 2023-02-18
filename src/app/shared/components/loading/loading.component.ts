import { LoadingService } from './loading.service';
import { Component } from '@angular/core';

/** componente de loading */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  /** loading subjet */
  isLoading$ = this.LoadingService.isLoading$;

  /** constructor */
  constructor(private readonly LoadingService: LoadingService) {}
}

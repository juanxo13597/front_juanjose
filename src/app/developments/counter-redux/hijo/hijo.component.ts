import { AccordionInputModel } from './../../../shared/components/accordion/accordion.model';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';

/** HijoComponent */
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent {
  /** count$ */
  count$: Observable<number>;

  /** constructor */
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  /** increment */
  increment() {
    this.store.dispatch(increment());
  }

  /** decrement */
  decrement() {
    this.store.dispatch(decrement());
  }

  /** reset */
  reset() {
    this.store.dispatch(reset());
  }

  /** info */
  info: AccordionInputModel[] = [
    {
      title: 'info.description',
      content: 'counterRedux.description',
    },
    {
      title: 'info.tecnology',
      content: 'counterRedux.technologies',
    },
  ];
}

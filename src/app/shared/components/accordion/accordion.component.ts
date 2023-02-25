import { Component, Input } from '@angular/core';
import { AccordionInputModel } from './accordion.model';

/** accordion component */
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  /** info */
  @Input() info: AccordionInputModel[] = [];
}

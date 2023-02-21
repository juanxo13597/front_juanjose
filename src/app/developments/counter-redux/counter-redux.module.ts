import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterReduxRoutingModule } from './counter-redux-routing.module';
import { HijoComponent } from './hijo/hijo.component';
import { NietoComponent } from './nieto/nieto.component';

@NgModule({
  declarations: [HijoComponent, NietoComponent],
  imports: [CommonModule, CounterReduxRoutingModule, TranslateModule],
})
export class CounterReduxModule {}

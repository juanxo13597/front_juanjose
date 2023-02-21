import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterReduxRoutingModule } from './counter-redux-routing.module';
import { HijoComponent } from './hijo/hijo.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

@NgModule({
  declarations: [HijoComponent],
  imports: [
    CommonModule,
    CounterReduxRoutingModule,
    TranslateModule,
    StoreModule.forFeature('count', counterReducer),
  ],
})
export class CounterReduxModule {}

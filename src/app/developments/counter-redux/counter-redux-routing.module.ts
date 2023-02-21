import { StoreModule } from '@ngrx/store';
import { Error404Component } from './../../pages/error404/error404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { counterReducer } from './store/counter.reducer';

const routes: Routes = [
  {
    path: '',
    component: HijoComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('count', counterReducer),
  ],
  exports: [RouterModule],
})
export class CounterReduxRoutingModule {}

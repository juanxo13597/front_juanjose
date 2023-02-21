import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './../../pages/error404/error404.component';
import { HijoComponent } from './hijo/hijo.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterReduxRoutingModule {}

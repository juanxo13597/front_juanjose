import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../pages/error404/error404.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'todolist',
    loadChildren: () =>
      import('./todolist/todolist.module').then((m) => m.TodolistModule),
  },
  {
    path: 'counter-redux',
    loadChildren: () =>
      import('./counter-redux/counter-redux.module').then(
        (m) => m.CounterReduxModule
      ),
  },
  {
    path: '**',
    component: Error404Component,
  },
];

/** developments routing module */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopmentsRoutingModule {}

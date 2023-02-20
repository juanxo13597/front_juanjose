import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'developments',
    loadChildren: () =>
      import('./developments/developments.module').then(
        (m) => m.DevelopmentsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: Error404Component,
  },
];

/** routing principal de la app */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

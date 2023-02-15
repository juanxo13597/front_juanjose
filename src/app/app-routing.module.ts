import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UtilsService } from './services/utils.service';

/** importacion del servicio utils */
const utils = new UtilsService();

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: utils.genTitle('Home'),
  },
  {
    path: '**',
    component: Error404Component,
    title: utils.genTitle('Error 404'),
  },
];

/** routing principal de la app */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

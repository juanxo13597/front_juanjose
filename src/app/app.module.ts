import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [AppComponent, MainMenuComponent, HomePageComponent, Error404Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

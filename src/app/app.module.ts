import { environment } from './../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChangeTranslateComponent } from './components/change-translate/change-translate.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomePageComponent,
    Error404Component,
    ChangeTranslateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  /** constructor de la app */
  constructor(private title: Title) {
    this.title.setTitle(environment.info.nameApp);
  }
}

/** AOT compilation support */
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

import { environment } from './../environments/environment';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
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
import { MainMenuRightComponent } from './components/main-menu-right/main-menu-right.component';
import { LoadingInterceptor } from './shared/components/loading/loading.interceptor';
import { AccessTokenInterceptor } from './shared/interceptors/access-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomePageComponent,
    Error404Component,
    ChangeTranslateComponent,
    MainMenuRightComponent,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule],
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

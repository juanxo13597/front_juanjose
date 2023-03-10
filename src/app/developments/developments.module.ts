import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentsRoutingModule } from './developments-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

/** modulo de desarrollos */
@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, DevelopmentsRoutingModule, TranslateModule],
})
export class DevelopmentsModule {}

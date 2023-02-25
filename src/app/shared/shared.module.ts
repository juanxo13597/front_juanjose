import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertComponent } from './components/alert/alert.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [LoadingComponent, AlertComponent, AccordionComponent],
  imports: [CommonModule, TranslateModule],
  exports: [LoadingComponent, AlertComponent, AccordionComponent],
})
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ReactiveFormsModule } from '@angular/forms';
import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist/todolist.component';

/** todolist module */
@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class TodolistModule {}

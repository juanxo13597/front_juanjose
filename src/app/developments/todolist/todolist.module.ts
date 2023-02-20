import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist/todolist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/** todolist module */
@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    BrowserModule,
    TodolistRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class TodolistModule {}

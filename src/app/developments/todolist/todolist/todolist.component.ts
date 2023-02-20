import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/** todolist component */
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  /** input */
  @ViewChild('taskInput') input: ElementRef = {} as ElementRef;

  /** form task */
  formTask: FormGroup<{ taskInput: FormControl }> = new FormGroup({
    taskInput: new FormControl('', [Validators.required]),
  });

  /** task */
  tasks: string[] = [];

  /** add task */
  addTask() {
    this.tasks.push(this.formTask.value.taskInput);
    this.formTask.reset();
    this.input.nativeElement.focus();
  }

  /** remove task */
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  /** keydown */
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.addTask();
  }
}

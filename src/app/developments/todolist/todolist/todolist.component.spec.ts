import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { TodolistComponent } from './todolist.component';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodolistComponent],
      imports: [TranslateModule.forRoot(), ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add task', () => {
    component.formTask.controls.taskInput.setValue('test');
    component.addTask();

    expect(component.tasks).toEqual(['test']);
  });

  it('should remove task', () => {
    component.tasks = ['test'];
    component.removeTask(0);

    expect(component.tasks).toEqual([]);
  });

  it('should add task on keydown', () => {
    component.formTask.controls.taskInput.setValue('test');
    component.onKeydown({ key: 'Enter' } as KeyboardEvent);

    expect(component.tasks).toEqual(['test']);
  });
});

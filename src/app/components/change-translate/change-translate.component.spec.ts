import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTranslateComponent } from './change-translate.component';

describe('ChangeTranslateComponent', () => {
  let component: ChangeTranslateComponent;
  let fixture: ComponentFixture<ChangeTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTranslateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

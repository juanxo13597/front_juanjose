import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ChangeTranslateComponent } from './change-translate.component';

describe('ChangeTranslateComponent', () => {
  let component: ChangeTranslateComponent;
  let fixture: ComponentFixture<ChangeTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ChangeTranslateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change language', () => {
    component.switchLang('en');

    expect(component.translate.currentLang).toBe('en');
  });
});

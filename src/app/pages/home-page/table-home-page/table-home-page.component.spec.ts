import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHomePageComponent } from './table-home-page.component';

describe('TableHomePageComponent', () => {
  let component: TableHomePageComponent;
  let fixture: ComponentFixture<TableHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [TableHomePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

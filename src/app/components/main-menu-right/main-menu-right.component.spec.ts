import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuRightComponent } from './main-menu-right.component';

describe('MainMenuRightComponent', () => {
  let component: MainMenuRightComponent;
  let fixture: ComponentFixture<MainMenuRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenuRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMenuRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

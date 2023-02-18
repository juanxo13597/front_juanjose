import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text-dark class by default', () => {
    const loadingEl: HTMLElement =
      fixture.nativeElement.querySelector('.spinner-grow');

    expect(loadingEl.classList.contains('text-dark')).toBeTrue();
  });

  it('should have text-primary class when color is set to primary', () => {
    component.color = 'primary';
    fixture.detectChanges();

    const loadingEl: HTMLElement =
      fixture.nativeElement.querySelector('.spinner-grow');

    expect(loadingEl.classList.contains('text-primary')).toBeTrue();
  });
});

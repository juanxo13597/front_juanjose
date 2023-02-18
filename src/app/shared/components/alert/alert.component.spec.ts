import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have success class by default', () => {
    const alertEl: HTMLElement = fixture.nativeElement.querySelector('.alert');

    expect(alertEl.classList.contains('alert-success')).toBeTrue();
  });

  it('should have danger class when color is set to danger', () => {
    component.color = 'danger';
    fixture.detectChanges();

    const alertEl: HTMLElement = fixture.nativeElement.querySelector('.alert');

    expect(alertEl.classList.contains('alert-danger')).toBeTrue();
  });

  it('should render text', () => {
    component.text = 'Test';
    fixture.detectChanges();

    const alertEl: HTMLElement = fixture.nativeElement.querySelector('.alert');

    expect(alertEl.textContent).toContain('Test');
  });
});

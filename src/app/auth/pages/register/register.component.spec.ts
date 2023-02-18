import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],
      declarations: [RegisterComponent],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    service = TestBed.inject(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register all success', () => {
    component.registerForm.patchValue({
      name: 'test',
      surname: 'test',
      email: 'email@email.es',
      passwords: {
        password: '123456',
        password_confirmation: '123456',
      },
    });

    fixture.detectChanges();

    expect(component.registerForm.valid).toBeTruthy();

    const emailEL: HTMLElement = fixture.nativeElement.querySelector('#email');

    expect(emailEL.classList.contains('ng-valid')).toBeTrue();

    const passwordEL: HTMLElement =
      fixture.nativeElement.querySelector('#password');

    expect(passwordEL.classList.contains('ng-valid')).toBeTrue();

    const passwordConfirmationEL: HTMLElement =
      fixture.nativeElement.querySelector('#password_confirmation');

    expect(passwordConfirmationEL.classList.contains('ng-valid')).toBeTrue();

    const nameEL: HTMLElement = fixture.nativeElement.querySelector('#name');

    expect(nameEL.classList.contains('ng-valid')).toBeTrue();

    const surnameEL: HTMLElement =
      fixture.nativeElement.querySelector('#surname');

    expect(surnameEL.classList.contains('ng-valid')).toBeTrue();

    spyOn(service, 'register').and.returnValue(of({ email: 'email@email.es' }));

    component.submit();
  });
});

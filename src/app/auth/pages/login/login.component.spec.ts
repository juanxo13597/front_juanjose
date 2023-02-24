/* eslint-disable jasmine/prefer-toHaveBeenCalledWith */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { appState } from 'src/app/app.state';
import { constants } from '../../../shared/constants/constants';
import { AuthService } from '../../services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        StoreModule.forRoot(appState),
      ],
      declarations: [LoginComponent],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    service = TestBed.inject(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login all success validation', () => {
    component.loginForm.patchValue({
      email: 'email@email.es',
      password: '123123',
    });

    fixture.detectChanges();

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('login all error validation', () => {
    component.loginForm.patchValue({
      email: 'emailemail.es',
      password: '',
    });

    fixture.detectChanges();

    expect(component.loginForm.valid).toBeFalsy();
  });

  it('register all success logic', () => {
    jasmine.clock().install();
    spyOn(component.loginForm, 'reset').and.callThrough();
    spyOn(service, 'login').and.returnValue(
      of({
        access_token: 'token',
        user: {
          id: 1,
          name: 'name',
          surname: 'surname',
          email: 'email',
          created_at: new Date(),
          updated_at: new Date(),
        },
      })
    );

    component.submit();

    expect(service.login).toHaveBeenCalled();
    expect(component.state.send).toEqual(true);

    setTimeout(() => {
      expect(component.loginForm.reset).toHaveBeenCalled();
      expect(component.state.send).toEqual(false);
    }, constants.setTimeOut + 1000);

    jasmine.clock().tick(10000);
    jasmine.clock().uninstall();
  });

  it('login all error logic', () => {
    spyOn(service, 'login').and.returnValue(
      of({
        access_token: 'token',
        response: 'error',
        error: 'error',
        status: 401,
        message: 'Email or password incorrect',
      })
    );

    component.submit();

    expect(service.login).toHaveBeenCalled();
  });
});

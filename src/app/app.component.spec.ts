import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { appState } from './app.state';

describe('AppComponent', () => {
  let service: AppService;
  const date = new Date();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        StoreModule.forRoot(appState),
      ],
      declarations: [AppComponent],
      providers: [AppService],
    }).compileComponents();
    service = TestBed.inject(AppService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should call back init', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(service, 'init').and.returnValue(
      of({
        status: true,
        user: {
          id: 1,
          name: 'name',
          surname: 'surname',
          email: 'email@email.es',
          updated_at: date,
          created_at: date,
        },
      })
    );

    app.isBackActive();

    // eslint-disable-next-line jasmine/prefer-toHaveBeenCalledWith
    expect(service.init).toHaveBeenCalled();
  });

  it('should call back init no localstorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(service, 'init').and.returnValue(
      of({
        status: true,
        user: {
          id: 1,
          name: 'name',
          surname: 'surname',
          email: 'email@email.es',
          updated_at: date,
          created_at: date,
        },
      })
    );

    app.isBackActive();

    // eslint-disable-next-line jasmine/prefer-toHaveBeenCalledWith
    expect(service.init).toHaveBeenCalled();
  });
});

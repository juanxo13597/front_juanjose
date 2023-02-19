import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent', () => {
  let service: AppService;
  const date = new Date();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
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
});

import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { counterReducer } from '../store/counter.reducer';
import { increment, decrement, reset } from '../store/counter.actions';

import { HijoComponent } from './hijo.component';

describe('HijoComponent', () => {
  let component: HijoComponent;
  let fixture: ComponentFixture<HijoComponent>;
  let store: Store<{ count: number }>;
  let storeSpy: jasmine.Spy;
  const initialState = { count: 0 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ count: counterReducer }),
        TranslateModule.forRoot(),
      ],
      declarations: [HijoComponent],
    }).compileComponents();

    store = TestBed.inject(Store);
    storeSpy = spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call store.dispatch with increment action', () => {
    component.increment();

    expect(storeSpy).toHaveBeenCalledWith(increment());
  });

  it('should call store.dispatch with decrement action', () => {
    component.decrement();

    expect(storeSpy).toHaveBeenCalledWith(decrement());
  });

  it('should call store.dispatch with reset action', () => {
    component.reset();

    expect(storeSpy).toHaveBeenCalledWith(reset());
  });
});

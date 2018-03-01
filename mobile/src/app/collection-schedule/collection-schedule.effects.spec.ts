import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { CollectionScheduleEffects } from './collection-schedule.effects';

describe('CollectionScheduleService', () => {
  let actions$: Observable<any>;
  let effects: CollectionScheduleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CollectionScheduleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CollectionScheduleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

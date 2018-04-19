import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import {CollectionScheduleService} from './collection-schedule.service';

import {MOCK_COLLECTION_SCHEDULE_RESPONSE} from './collection-schedule.service.mock';
import {CollectionScheduleServiceRequest} from './collection-schedule.service.request';
import * as _ from 'lodash';


describe('CollectionScheduleService', () => {
  let service: CollectionScheduleService;
  let httpSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CollectionScheduleService],
    });

    service = TestBed.get(CollectionScheduleService);
  });

  describe('All Results', () => {
    beforeEach(() => {
      const http = TestBed.get(HttpClient);
      httpSpy = spyOn(http, 'get').and.returnValue(of(MOCK_COLLECTION_SCHEDULE_RESPONSE));
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return the collection schedule', done => {
      service.get().subscribe(actual => {
        expect(actual).toBeDefined();

        expect(actual.length > 0).toBe(true);

        //expect(actual[0]).toEqual(jasmine.any(CollectionSchedule));

        const expected = MOCK_COLLECTION_SCHEDULE_RESPONSE[0];
        expect(actual[0]).toEqual(expected);
        done();
      });
    });

    it('should return the correct collection schedule', done => {
      const expected = new CollectionScheduleServiceRequest({collection_day: 'FRIDAY'});
      service.get().subscribe(response => {
        expect(response).toBeDefined();

        expect(response.length > 0).toBe(true);

        //expect(response[0]).toEqual(jasmine.any(CollectionSchedule));

        response.forEach((actual) => {
          expect(actual.collection_day).toEqual('FRIDAY');
        });

        done();
      });
    });
  });

  describe('No Results', () => {
    beforeEach(() => {
      const http = TestBed.get(HttpClient);
      var httpSpy;
      httpSpy = spyOn(http, 'get').and.returnValue(of([]));
    });

    it('should return an empty array', done => {
      service.get().subscribe(actual => {
        expect(actual).toBeDefined();
        expect(actual).toEqual(jasmine.any(Array));
        expect(actual.length).toBe(0);
        done();
      });
    });
  });

});




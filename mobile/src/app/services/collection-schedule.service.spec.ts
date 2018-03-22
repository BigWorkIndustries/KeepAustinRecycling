import { TestBed } from '@angular/core/testing';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import {CollectionScheduleService} from './collection-schedule.service';
import {CollectionSchedule} from '../collection-schedule/collection-schedule.model';
import {MOCK_COLLECTION_SCHEDULE_RESPONSE} from './collection-schedule.service.mock';
// tslint:disable-next-line:max-line-length


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

    it('should return the address configuration', done => {
      service.get().subscribe(actual => {
        expect(actual).toBeDefined();

        expect(actual.length > 0).toBe(true);

        expect(actual[0]).toEqual(jasmine.any(CollectionSchedule));

        const expected = new CollectionSchedule(MOCK_COLLECTION_SCHEDULE_RESPONSE[0]);
        expect(actual[0]).toEqual(expected);
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




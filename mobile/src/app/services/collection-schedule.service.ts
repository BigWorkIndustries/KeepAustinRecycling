
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CollectionSchedule} from '../collection-schedule/collection-schedule.model';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {CollectionScheduleServiceRequest} from './collection-schedule.service.request';

@Injectable()
export class CollectionScheduleService {

  /**
   * The URL for the API used by the service.
   * @type {string}
   */
  serviceUrl = `https://data.austintexas.gov/resource/hp3m-f33e.json`;

  /**
   * Constructor.
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {}

  /**
   * Gets {CollectionSchedule} objects.
   * @param {CollectionScheduleServiceRequest} request
   * @returns {Observable<CollectionSchedule[]>}
   */
  get (request: CollectionScheduleServiceRequest = null): Observable<CollectionSchedule[]> {

    return this.http.get<CollectionSchedule[]>(this.serviceUrl, { params: request ? request.HttpParams : null}).pipe(
      map(res => {
        return res.map(schedule => new CollectionSchedule(schedule));
      })
    );
  }
}

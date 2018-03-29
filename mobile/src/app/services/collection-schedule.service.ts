
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {CollectionSchedule} from '../collection-schedule/collection-schedule.model';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

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

  get (): Observable<CollectionSchedule[]> {

    return this.http.get<CollectionSchedule[]>(this.serviceUrl).pipe(
      map(res => {
        return res.map(schedule => new CollectionSchedule(schedule));
      })
    );
  }
}

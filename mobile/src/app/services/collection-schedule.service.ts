import {CollectionSchedule} from '../models/collection-schedule';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

export class CollectionScheduleService {
  get (payload: string): Observable<CollectionSchedule[]> {
    return of(CollectionSchedule[]);
  }
}

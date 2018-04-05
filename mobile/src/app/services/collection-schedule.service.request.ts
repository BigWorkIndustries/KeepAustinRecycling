import {CollectionSchedule} from '../collection-schedule/collection-schedule.model';
import * as _ from 'lodash';
import {HttpParams} from '@angular/common/http';

export class CollectionScheduleServiceRequest extends CollectionSchedule {

  get HttpParams() {
    const params = new HttpParams();

    _.forEach(this, (key, value) => {
      params.set(key, value);
    });

    return params;
  }
}

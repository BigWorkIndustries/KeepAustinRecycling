import * as _ from 'lodash';
import {HttpParams} from '@angular/common/http';
import {CollectionScheduleClass} from '../../modules/collection-schedule/+state/collection-schedule.model';


export class CollectionScheduleServiceRequest extends CollectionScheduleClass {

  get HttpParams() {
    const params = new HttpParams();

    _.forEach(this, (key, value) => {
      params.set(key, value);
    });

    return params;
  }
}

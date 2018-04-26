import * as _ from 'lodash';

export interface CollectionSchedule {
  id: string;
  city?:string;
  collection_day?:string;
  collection_week?: string;
  house_no?: string;
  st_dir?: string;
  state?: string;
  street_nam?: string;
  street_typ?: string;
  zip?: string;
}

export class CollectionScheduleClass implements CollectionSchedule {

  id: string;

  /**
   * Constructor.
   * @param {Partial<CollectionSchedule>} data
   */
  constructor(data: Partial<CollectionSchedule>) {
    if (data) {
      _.extend(this, data);
    }
  }

}

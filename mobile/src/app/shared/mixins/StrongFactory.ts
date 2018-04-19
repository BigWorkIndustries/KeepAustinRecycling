import * as _ from 'lodash';

export class StrongFactor {

  static factory<T>(data: Partial<T>) {
    if (data) {
      _.extend(this, data);
    }
  }
}

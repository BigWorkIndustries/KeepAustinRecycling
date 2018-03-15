import {Action, Mutation, Store} from 'ngxs';
import {CollectionSchedule} from '../../models/collection-schedule';
import {CollectionScheduleService} from '../../services/collection-schedule.service';
import {take} from 'rxjs/operators';

export class GetCollectionSchedulesSuccess {
  constructor(public readonly payload: CollectionSchedule[]) {}
}

export class GetCollectionSchedules {
  constructor(public readonly payload: string) {}
}

@Store<CollectionSchedule[]>({})
export class CollectionScheduleStore {
  constructor(private collectionService: CollectionScheduleService) {}

  @Mutation(GetCollectionSchedulesSuccess)
  getCollectionSchedulesSuccess(state, { payload }) {
    state.animals = [...state.animals, payload];
  }

  @Action(GetCollectionSchedules)
  getCollectionSchedules(state, { payload }) {
    return this.collectionService.get(payload).pipe(
      take(1),
    ).subscribe(result => new GetCollectionSchedulesSuccess(result));
  }
}

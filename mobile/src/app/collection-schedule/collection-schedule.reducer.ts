import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CollectionSchedule } from './collection-schedule.model';
import { CollectionScheduleActions, CollectionScheduleActionTypes } from './collection-schedule.actions';

export interface State extends EntityState<CollectionSchedule> {
  // additional entities state properties
}

export const adapter: EntityAdapter<CollectionSchedule> = createEntityAdapter<CollectionSchedule>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: CollectionScheduleActions
): State {
  switch (action.type) {
    case CollectionScheduleActionTypes.AddCollectionSchedule: {
      return adapter.addOne(action.payload.collectionSchedule, state);
    }

    case CollectionScheduleActionTypes.UpsertCollectionSchedule: {
      return adapter.upsertOne(action.payload.collectionSchedule, state);
    }

    case CollectionScheduleActionTypes.AddCollectionSchedules: {
      return adapter.addMany(action.payload.collectionSchedules, state);
    }

    case CollectionScheduleActionTypes.UpsertCollectionSchedules: {
      return adapter.upsertMany(action.payload.collectionSchedules, state);
    }

    case CollectionScheduleActionTypes.UpdateCollectionSchedule: {
      return adapter.updateOne(action.payload.collectionSchedule, state);
    }

    case CollectionScheduleActionTypes.UpdateCollectionSchedules: {
      return adapter.updateMany(action.payload.collectionSchedules, state);
    }

    case CollectionScheduleActionTypes.DeleteCollectionSchedule: {
      return adapter.removeOne(action.payload.id, state);
    }

    case CollectionScheduleActionTypes.DeleteCollectionSchedules: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case CollectionScheduleActionTypes.LoadCollectionSchedules: {
      return adapter.addAll(action.payload.collectionSchedules, state);
    }

    case CollectionScheduleActionTypes.ClearCollectionSchedules: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

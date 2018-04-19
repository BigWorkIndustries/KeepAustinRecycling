import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCollectionSchedule from './collection-schedule/collection-schedule.reducer';

export interface State {

  collectionSchedule: fromCollectionSchedule.State;
}

export const reducers: ActionReducerMap<State> = {

  collectionSchedule: fromCollectionSchedule.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

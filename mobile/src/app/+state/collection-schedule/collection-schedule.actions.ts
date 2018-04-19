import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { CollectionSchedule } from './collection-schedule.model';

export enum CollectionScheduleActionTypes {
  LoadCollectionSchedules = '[CollectionSchedule] Load CollectionSchedules',
  AddCollectionSchedule = '[CollectionSchedule] Add CollectionSchedule',
  UpsertCollectionSchedule = '[CollectionSchedule] Upsert CollectionSchedule',
  AddCollectionSchedules = '[CollectionSchedule] Add CollectionSchedules',
  UpsertCollectionSchedules = '[CollectionSchedule] Upsert CollectionSchedules',
  UpdateCollectionSchedule = '[CollectionSchedule] Update CollectionSchedule',
  UpdateCollectionSchedules = '[CollectionSchedule] Update CollectionSchedules',
  DeleteCollectionSchedule = '[CollectionSchedule] Delete CollectionSchedule',
  DeleteCollectionSchedules = '[CollectionSchedule] Delete CollectionSchedules',
  ClearCollectionSchedules = '[CollectionSchedule] Clear CollectionSchedules'
}

export class LoadCollectionSchedules implements Action {
  readonly type = CollectionScheduleActionTypes.LoadCollectionSchedules;

  constructor(public payload: { collectionSchedules: CollectionSchedule[] }) {}
}

export class AddCollectionSchedule implements Action {
  readonly type = CollectionScheduleActionTypes.AddCollectionSchedule;

  constructor(public payload: { collectionSchedule: CollectionSchedule }) {}
}

export class UpsertCollectionSchedule implements Action {
  readonly type = CollectionScheduleActionTypes.UpsertCollectionSchedule;

  constructor(public payload: { collectionSchedule: CollectionSchedule }) {}
}

export class AddCollectionSchedules implements Action {
  readonly type = CollectionScheduleActionTypes.AddCollectionSchedules;

  constructor(public payload: { collectionSchedules: CollectionSchedule[] }) {}
}

export class UpsertCollectionSchedules implements Action {
  readonly type = CollectionScheduleActionTypes.UpsertCollectionSchedules;

  constructor(public payload: { collectionSchedules: CollectionSchedule[] }) {}
}

export class UpdateCollectionSchedule implements Action {
  readonly type = CollectionScheduleActionTypes.UpdateCollectionSchedule;

  constructor(public payload: { collectionSchedule: Update<CollectionSchedule> }) {}
}

export class UpdateCollectionSchedules implements Action {
  readonly type = CollectionScheduleActionTypes.UpdateCollectionSchedules;

  constructor(public payload: { collectionSchedules: Update<CollectionSchedule>[] }) {}
}

export class DeleteCollectionSchedule implements Action {
  readonly type = CollectionScheduleActionTypes.DeleteCollectionSchedule;

  constructor(public payload: { id: string }) {}
}

export class DeleteCollectionSchedules implements Action {
  readonly type = CollectionScheduleActionTypes.DeleteCollectionSchedules;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearCollectionSchedules implements Action {
  readonly type = CollectionScheduleActionTypes.ClearCollectionSchedules;
}

export type CollectionScheduleActions =
 LoadCollectionSchedules
 | AddCollectionSchedule
 | UpsertCollectionSchedule
 | AddCollectionSchedules
 | UpsertCollectionSchedules
 | UpdateCollectionSchedule
 | UpdateCollectionSchedules
 | DeleteCollectionSchedule
 | DeleteCollectionSchedules
 | ClearCollectionSchedules;

import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export enum RxAction {
  AddOne = 'Add one',
  AddMany = 'Add many',
  UpdateOne = 'Update one',
  UpdateMany = 'Update many',
  UpsertOne = 'Upsert one',
  UpsertMany = 'Upsert Many',
  DeleteOne = 'Delete one',
  DeleteMany = 'Delete Many',
}

export class AddOneAction<T> implements Action {
  readonly type = RxAction.AddOne;
  constructor(public payload: T) {}
}

export class AddManyAction<T> implements Action {
  readonly type = RxAction.AddMany;
  constructor(public payload: T[]) {}
}

export class UpdateOneAction<T> implements Action {
  readonly type = RxAction.UpdateOne;
  constructor(public payload: Update<T>) {}
}

export class UpdateManyAction<T> implements Action {
  readonly type = RxAction.UpdateMany;
  constructor(public payload: Update<T>[]) {}
}

export class UpsertOneAction<T> implements Action {
  readonly type = RxAction.UpsertOne;
  constructor(public payload: Update<T>) {}
}

export class UpsertManyAction<T> implements Action {
  readonly type = RxAction.UpsertMany;
  constructor(public payload: Update<T>[]) {}
}

export class DeleteOneAction<T> implements Action {
  readonly type = RxAction.DeleteOne;
  constructor(public id: number) {}
}

export class DeleteManyAction<T> implements Action {
  readonly type = RxAction.DeleteMany;
  constructor(public ids: number[]) {}
}

export type RxActionType<T> =
  | AddOneAction<T>
  | AddManyAction<T>
  | UpdateOneAction<T>
  | UpdateManyAction<T>
  | DeleteOneAction<T>
  | DeleteManyAction<T>
  | UpsertOneAction<T>
  | UpsertManyAction<T>;

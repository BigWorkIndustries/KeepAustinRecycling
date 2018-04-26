import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCollectionSchedule from './+state/collection-schedule.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CollectionScheduleEffects } from './+state/collection-schedule.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('collectionSchedule', fromCollectionSchedule.reducer),
    EffectsModule.forFeature([CollectionScheduleEffects])
  ],
  declarations: []
})
export class CollectionScheduleModule { }

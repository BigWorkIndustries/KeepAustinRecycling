import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NgxsModule} from 'ngxs';
import {CollectionScheduleStore} from './+state/collection-schedule/collection-schedule.store';
import { StoreModule } from '@ngrx/store';
import * as fromCollectionSchedule from './reducers';
import * as fromCollectionSchedule from './collection-schedule/collection-schedule.reducer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxsModule.forRoot([
      CollectionScheduleStore
    ], { /* optional options */ }),
    StoreModule.forFeature('collectionSchedule', fromCollectionSchedule.reducers, { metaReducers: fromCollectionSchedule.metaReducers }),
    StoreModule.forFeature('collectionSchedule', fromCollectionSchedule.reducer)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

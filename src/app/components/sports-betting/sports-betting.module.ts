import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SportsBettingComponent } from './sports-betting.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EventListModule } from '../event-list/event-list.module';
import { BetsHistoryModule } from '../bets-history/bets-history.module';

@NgModule({
  declarations: [
    SportsBettingComponent
  ],
  imports: [
    MatToolbarModule,
    EventListModule,
    BetsHistoryModule,
    TranslateModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  providers: [],
  exports: [
    SportsBettingComponent
  ]
})
export class SportsBettingModule { }
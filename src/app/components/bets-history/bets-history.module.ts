import { NgModule } from '@angular/core';
import { BetsHistoryComponent } from './bets-history.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BetStatusModule } from '../bet-status/bet-status.module';
import { UserInfoModule } from '../user-info/user-info.module';

@NgModule({
  declarations: [
    BetsHistoryComponent
  ],
  imports: [
    TranslateModule,
    CommonModule,
    MatListModule,
    MatIconModule,
    BetStatusModule,
    UserInfoModule
  ],
  providers: [],
  exports: [
    BetsHistoryComponent
  ]
})
export class BetsHistoryModule { }
import { NgModule } from '@angular/core';
import { BetStatusComponent } from './bet-status.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BetStatusComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    BetStatusComponent
  ]
})
export class BetStatusModule { }
import { NgModule } from '@angular/core';
import { EventListComponent } from './event-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { BetFormModule } from '../bet-form/bet-form.module';
import { EventDetailModule } from '../event-detail/event-detail.module';

@NgModule({
  declarations: [
    EventListComponent
  ],
  imports: [
    BetFormModule,
    MatExpansionModule,
    MatIconModule,
    CommonModule,
    EventDetailModule
  ],
  providers: [],
  exports: [
    EventListComponent
  ]
})
export class EventListModule { }
import { NgModule } from '@angular/core';
import { EventDetailComponent } from './event-detail.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BetStatusModule } from '../bet-status/bet-status.module';
import { BetFormModule } from '../bet-form/bet-form.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    BetStatusModule,
    BetFormModule,
    MatDialogModule
  ],
  providers: [],
  exports: [
    EventDetailComponent
  ]
})
export class EventDetailModule { }
import { Component, Input } from '@angular/core';
import { BET_STATUS } from 'src/app/models/bet-event.model';

/**
 * This is a simple component used to display the bet status
 */
@Component({
  selector: 'bet-status',
  templateUrl: './bet-status.component.html',
  styleUrls: ['./bet-status.component.scss']
})
export class BetStatusComponent {

  /**
   * betStatus is an enum to represent if an event is in game, finished or not started yet
   */
  @Input() betStatus!: BET_STATUS;

  public betStatusEnum = BET_STATUS;

  constructor() { }

}

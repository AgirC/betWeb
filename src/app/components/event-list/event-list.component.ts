import { Component, Input } from '@angular/core';
import { BetEvent } from '../../models/bet-event.model';

/**
 * This component displays the list of events
 */
@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  /**
   * List of events to display
   */
  @Input() eventList!: BetEvent[];

  /**
   * Current user capital (needed in order to do new bets)
   */
  @Input() userCapital!: number;

  constructor() { }

}

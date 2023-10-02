import { Component, Input } from '@angular/core';
import { Bet } from 'src/app/models/bet.model';
import { UserInfo } from 'src/app/models/user-info.model';

/**
 * This component is used to display the bet history (on the left) and the user info (on the right)
 */
@Component({
  selector: 'bets-history',
  templateUrl: './bets-history.component.html',
  styleUrls: ['./bets-history.component.scss']
})
export class BetsHistoryComponent {

  /**
   * This inputs contains all teh bets of the user
   */
  @Input() bets!: Bet[];

  /**
   * This input has the info of the user and it is passed to the user-info component
   */
  @Input() userInfo!: UserInfo;

  constructor() { }

}

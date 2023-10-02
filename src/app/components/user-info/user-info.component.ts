import { Component, Input } from '@angular/core';
import { Bet } from 'src/app/models/bet.model';
import { UserInfo } from 'src/app/models/user-info.model';

/**
 * Component to display the user info
 */
@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  /**
   * User info input is used to display name and current capital of the user
   */
  @Input() userInfo!: UserInfo;

  /**
   * we pass bets to chart component
   */
  @Input() bets!: Bet[];

  constructor() { }


}

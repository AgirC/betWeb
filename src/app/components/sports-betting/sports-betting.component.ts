import { Component, OnDestroy, OnInit } from '@angular/core';
import { BetEvent } from '../../models/bet-event.model';
import { BetEventsService } from '../../services/bet-events.service';
import { Bet } from 'src/app/models/bet.model';
import { BetService } from 'src/app/services/bet.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Subscription, combineLatest } from 'rxjs';
import { UserInfo } from 'src/app/models/user-info.model';

/**
 * Main component of the app.
 * It subscribe to events, userinfo and bets and pass the information to its children
 */
@Component({
  selector: 'sports-betting',
  templateUrl: './sports-betting.component.html',
  styleUrls: ['./sports-betting.component.scss']
})
export class SportsBettingComponent implements OnInit, OnDestroy {

  betEvents!: BetEvent[];
  showBetEventsSpinner: boolean = false;

  betHistory!: Bet[];
  userInfo!: UserInfo;

  subscriptions: Subscription[] = [];

  constructor(
    private betEventSrv: BetEventsService,
    private betSrv: BetService,
    private userInfoSrv: UserInfoService
  ) { }

  /**
   * On init we call the method to subscribe to event list, bets and user info
   */
  ngOnInit(): void {
    this.getEventList();
    this.getBetHistory();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * In this method we subscribe to events list.
   * We use showBetEventsSpinner to show an spinner on the event list component until next or error events are trigger
   */
  getEventList(): void {
    this.showBetEventsSpinner = true;
    const subs: Subscription = this.betEventSrv.getBetEventList().subscribe(
      {
        next: (result) => {
          this.betEvents = result;
          this.showBetEventsSpinner = false;
        },
        error: (err) => {
          console.log(err);
          this.showBetEventsSpinner = false;
        }
      });
      this.subscriptions.push(subs);
  }

  /**
   * In this method we subscribe to bedt list and user info.
   */
  getBetHistory(): void {

    const subs: Subscription = combineLatest([this.userInfoSrv.userInfo, this.betSrv.betList]).subscribe(
      {
        next: (result) => {
          this.userInfo = result[0];
          this.betHistory = result[1];
          this.betHistory = [...this.betHistory];
        },
        error: (err) => {
          console.log(err);
        }
      });
      this.subscriptions.push(subs);
  }
}

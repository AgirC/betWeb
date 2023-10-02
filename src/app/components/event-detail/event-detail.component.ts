import { Component, Input, OnInit } from '@angular/core';
import { BetEvent, BetRate } from '../../models/bet-event.model';
import { MatDialog } from '@angular/material/dialog';
import { BetFormComponent } from '../bet-form/bet-form.component';
import { BetService } from 'src/app/services/bet.service';
import { Bet } from 'src/app/models/bet.model';
import { UserInfoService } from '../../services/user-info.service';

/**
 * This component is what we use to display event detail when user click on an event
 * In this component the user can click on the bet that the want to do and a dialog will open to ask for the amount
 */
@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {

  /**
   * eventDetail is all the event information that this component need to display
   */
  @Input() eventDetail!: BetEvent;

  /**
   * userCapital is pass to dialog, we need it to bet only amounts less than userCapital
   */
  @Input() userCapital!: number;

  constructor(
    public dialog: MatDialog,
    private betSrv: BetService,
    private userSrv: UserInfoService
  ) { }

  /**
   * openBetModal is used to open the bet form modal. When modal is closed if it returns data we create a new bet
   * @param betRate this param has the info of the bet option selected and the win rate
   */
  openBetModal(betRate: BetRate): void {
    const dialogRef = this.dialog.open(BetFormComponent, {
      data: {
        betRate,
        userCapital: this.userCapital
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        betRate.amount = result;
        this.createNewBet(betRate);

      }
    });
  }

  /**
   * This function calls the bets service to create a new bet and it pass the bet rate and the envetDetail
   * After that it calls user service to update the capital with the result of the bet
   * @param betRate the bet that we want to create
   */
  createNewBet(betRate: BetRate): void {
    const newBet: Bet = this.betSrv.createNewBet(betRate, this.eventDetail);
    this.userSrv.changeCurrentCapital(newBet.betResult);
  }

}

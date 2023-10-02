import { Injectable } from '@angular/core';
import { Bet } from '../models/bet.model';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';
import { BET_LIST } from '../mocks/bet-list.mock';
import { BetEvent, BetRate } from '../models/bet-event.model';

@Injectable({
    providedIn: 'root',
})
export class BetService {

    private betListSubject: BehaviorSubject<Bet[]> = new BehaviorSubject([] as Bet[]);
    public readonly betList: Observable<Bet[]> = this.betListSubject.asObservable();

    constructor() {
        this.initBetList();
    }

    public initBetList(forceRequest?: boolean): void {
        if (!this.betListSubject.getValue().length || forceRequest) {
            //here we should use an http request instead of mock
            setTimeout(() => this.betListSubject.next(BET_LIST), 500)
        }
    }

    public createNewBet(betRate: BetRate, betEvent: BetEvent): Bet {
        let betList: Bet[] = this.betListSubject.getValue();
        const winner: boolean = Math.random() < 0.5;
        const newBet: Bet = {
            betAmount: betRate.amount || 0,
            winner: winner,
            betEvent,
            date: new Date(),
            betResult: this.getResult(betRate, winner)
        }
        betList.push(newBet);
        this.betListSubject.next(betList);
        return newBet;
    }

    public getResult(betRate: BetRate, winner: boolean): number {
        let result: number = 0;
        if( betRate.amount) {
            if (winner) {
                result = betRate.amount * betRate.rate;
            } else {
                result = - (betRate.amount)
            }
        }
        return result;
    }

}
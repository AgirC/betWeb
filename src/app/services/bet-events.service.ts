import { Injectable } from '@angular/core';
import { BetEvent } from '../models/bet-event.model';
import { BET_EVENTS } from '../mocks/bet-events.mock';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BetEventsService {

    private betEventList!: BetEvent[];

    public getBetEventList(forceRequest?: boolean): Observable<BetEvent[]> {
        if (!this.betEventList || forceRequest) {
            //here we should use an http request instead of mock
            this.betEventList = BET_EVENTS;
        }
        let result = of(this.betEventList).pipe ( delay( 2000 ));
        return result;
    }
}
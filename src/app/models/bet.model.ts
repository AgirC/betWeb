import { BetEvent } from "./bet-event.model";

export interface Bet {
    betAmount: number;
    winner: boolean;
    betResult: number;
    betEvent: BetEvent;
    date: Date;
}
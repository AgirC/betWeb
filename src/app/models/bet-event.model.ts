export interface BetEvent {
    id: string;
    iconName: string;
    sportName: string;
    team1: Team;
    team2: Team;
    betRates: BetRate [];
    date: Date;
    status: BET_STATUS;
    result: string [];
}

export interface Team {
    id: string;
    name: string;
    image: string;
}

export enum BET_STATUS {
    IN_GAME = 'IN_GAME',
    NOT_STARTED = 'NOT_STARTED',
    FINISHED = 'FINISHED'
}

export interface BetRate {
    name: string;
    rate: number;
    amount?: number;
}
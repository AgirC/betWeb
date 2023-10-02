import { BET_STATUS } from "../models/bet-event.model";

export const BET_EVENTS = [
  {
    id: 'event-1',
    sportName: 'Football',
    iconName: 'sports_soccer',
    betRates: [
      {
        name: '1',
        rate: 1.25
      },
      {
        name: 'x',
        rate: 3
      },
      {
        name: '2',
        rate: 5.50
      }
    ],
    date: new Date(),
    result: ['2 - 0'],
    status: BET_STATUS.IN_GAME,
    team1:
    {
      id: 'team-1',
      name: 'Real Madrid',
      image: 'real.png',
    },
    team2:
    {
      id: 'team-2',
      name: 'Atletico de Madrid',
      image: 'atleti.png',
    }

  },
  {
    id: 'event-2',
    sportName: 'Tennis',
    iconName: 'sports_tennis',
    betRates: [
      {
        name: '1',
        rate: 1.25
      },
      {
        name: '2',
        rate: 2.50
      }
    ],
    date: new Date(),
    result: ['6 - 4', '6 - 0', '6 - 7', '7 - 5'],
    status: BET_STATUS.FINISHED,
    team1:
    {
      id: 'team-3',
      name: 'Rafael Nadal',
      image: 'nadal.png',
    },
    team2:
    {
      id: 'team-4',
      name: 'Federer',
      image: 'federer.png',
    }
  },
  {
    id: 'event-2',
    sportName: 'Tennis',
    iconName: 'sports_tennis',
    betRates: [
      {
        name: '1',
        rate: 1.25
      },
      {
        name: '2',
        rate: 2.50
      }
    ],
    date: new Date(),
    result: [],
    status: BET_STATUS.NOT_STARTED,
    team1:
    {
      id: 'team-3',
      name: 'Rafael Nadal',
      image: 'nadal.png',
    },
    team2:
    {
      id: 'team-4',
      name: 'Federer',
      image: 'federer.png',
    }
  }
]
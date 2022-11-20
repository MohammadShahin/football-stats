// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { LeagueData } from '../../src/types';

type Data = LeagueData;
type ErrorMessage = {
  message: string;
};

const leaguesStandings: { [key: string]: Data } = {
  1: {
    id: '1',
    name: 'Premier League',
    country: 'England',
    season: '2021-2022',
    standings: [
      {
        name: 'what',
        logo: 'https://media.api-sports.io/football/teams/40.png',
        points: 20,
      },
      {
        name: 'what',
        logo: 'https://media.api-sports.io/football/teams/40.png',
        points: 20,
      },
    ],
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorMessage>
) {
  if (req.method === 'GET') {
    const leagueId = req.query.id;
    if (
      leagueId &&
      typeof leagueId === 'string' &&
      leaguesStandings[leagueId]
    ) {
      res.status(200).json(leaguesStandings['1']);
    } else {
      res.status(400).json({ message: 'Bad request' });
    }
  }
}

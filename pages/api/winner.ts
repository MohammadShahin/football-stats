// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { LeagueWinner } from '../../src/types'

type Data = LeagueWinner
type ErrorMessage = {
  message: string
}

const leagueLastChampions: { [key: string]: Data } = {
  '1': {
    team: 'Manchester City',
    points: 93,
    logo: 'https://dlskits.com/wp-content/uploads/2018/05/Manchester-City-Logo-for-Dream-League-Soccer.png',
  },
  '2': {
    team: 'Real Madrid',
    points: 86,
    logo: 'https://dlskits.com/wp-content/uploads/2018/01/real-madrid-logo.png',
  },
  '3': {
    team: 'Bayern Munich',
    points: 77,
    logo: 'https://dlskits.com/wp-content/uploads/2018/05/Bayern-Munich-Logo-for-Dream-League-Soccer.png',
  },
  '4': {
    team: 'AC Milan',
    points: 86,
    logo: 'https://dlskits.com/wp-content/uploads/2018/02/AC-Milan-Dream-League-Soccer-Logo-2017-18.png',
  },
  '5': {
    team: 'Paris Saint-Germain',
    points: 86,
    logo: 'https://dlskits.com/wp-content/uploads/2018/05/Paris-Saint-Germain-Logo-for-Dream-League-Soccer.png',
  },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorMessage>
) {
  if (req.method === 'GET') {
    const leagueId = req.query.id
    if (
      leagueId &&
      typeof leagueId === 'string' &&
      leagueLastChampions[leagueId]
    ) {
      res.status(200).json(leagueLastChampions[leagueId])
    } else {
      res.status(400).json({ message: 'Bad request' })
    }
  }
}

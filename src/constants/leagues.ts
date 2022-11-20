import { League } from '../types'

const leagues: League[] = [
  {
    id: '1',
    name: 'Premier League',
    country: 'England',
    logo: '/leagues/premier-league.png',
    flag: '/flags/england.png',
    apiUrls: {
      standings: '/api/standings?id=1',
      lastYearWinner: '/api/winner?id=1',
    },
  },
  {
    id: '2',
    name: 'La Liga',
    country: 'Spain',
    logo: '/leagues/la-liga.png',
    flag: '/flags/spain.png',
    apiUrls: {
      standings: '/api/standings?id=2',
      lastYearWinner: '/api/winner?id=2',
    },
  },
  {
    id: '3',
    name: 'Bundesliga',
    country: 'Germany',
    logo: '/leagues/bundesliga.png',
    flag: '/flags/germany.png',
    apiUrls: {
      standings: '/api/standings?id=3',
      lastYearWinner: '/api/winner?id=3',
    },
  },
  {
    id: '4',
    name: 'Serie A',
    country: 'Italy',
    logo: '/leagues/serie-a.png',
    flag: '/flags/italy.png',
    apiUrls: {
      standings: '/api/standings?id=4',
      lastYearWinner: '/api/winner?id=4',
    },
  },
  {
    id: '5',
    name: 'Ligue 1',
    country: 'France',
    logo: '/leagues/ligue-1.png',
    flag: '/flags/france.png',
    apiUrls: {
      standings: '/api/standings?id=5',
      lastYearWinner: '/api/winner?id=5',
    },
  },
]

export { leagues }

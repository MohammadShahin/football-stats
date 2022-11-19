interface LeagueData {
  id: string
  name: string
  country: string
  season: string
  standings: Array<{
    team: string
    points: number
  }>
}

interface League {
  id: string
  name: string
  country: string
  logo: string
  flag: string

  apiUrls: {
    lastYearWinner: string
    standings: string
  }
}

interface Season {
  id: string
  name: string
}

export type { LeagueData, League, Season }

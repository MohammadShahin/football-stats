import axios from 'axios'
import { League, LeagueData, Season } from '../types'

export async function getStandings(
  league: League,
  season: Season
): Promise<LeagueData> {
  console.log(league.apiUrls.standings)
  const response = await axios.get(league.apiUrls.standings, {
    params: {
      season: season.id,
    },
  })
  console.log(response)
  return response.data
}

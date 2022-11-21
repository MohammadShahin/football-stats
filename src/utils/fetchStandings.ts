import axios from 'axios';
import { League, LeagueData, Season } from '../types';

export async function getStandings(
  league: League,
  season: Season
): Promise<LeagueData> {
  const seasonId = parseInt(season.name.split('/')[0], 10);
  const response = await axios.get(league.apiUrls.standings, {
    params: {
      id: league.id,
      season: seasonId,
    },
  });
  return response.data;
}

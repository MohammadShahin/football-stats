import axios from 'axios';
import { League, LeagueData, Season } from '../types';

export async function getStandings(
  league: League,
  season: Season
): Promise<LeagueData> {
  const response = await axios.get(league.apiUrls.standings, {
    params: {
      season: season.id,
    },
  });
  return response.data;
}

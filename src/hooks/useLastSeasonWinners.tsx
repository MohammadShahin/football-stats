import axios from 'axios';
import useSWR from 'swr';
import { League, TeamWithPoints } from '../types';

function fetcher(...leagues: League[]): Promise<TeamWithPoints[]> {
  async function singleFetcher(league: League): Promise<TeamWithPoints> {
    return axios.get(league.apiUrls.lastYearWinner).then((res) => res.data);
  }
  return Promise.all(leagues.map(singleFetcher));
}

export default function useLastSeasonWinners(leagues: Array<League>) {
  const { data, error } = useSWR(leagues, fetcher);
  return { data, error };
}

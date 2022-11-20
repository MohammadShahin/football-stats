interface Team {
  name: string;
  logo: string;
}

interface TeamWithPoints extends Team {
  points: number;
}

interface LeagueData {
  id: string;
  name: string;
  country: string;
  season: string;
  standings: Array<TeamWithPoints>;
}

interface League {
  id: string;
  name: string;
  country: string;
  logo: string;
  flag: string;

  apiUrls: {
    lastYearWinner: string;
    standings: string;
  };
}

interface Season {
  id: string;
  name: string;
}

interface RandomFactResponse {
  fact: string;
}

export type {
  LeagueData,
  League,
  Season,
  RandomFactResponse,
  Team,
  TeamWithPoints,
};

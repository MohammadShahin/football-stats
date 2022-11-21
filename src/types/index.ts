interface Team {
  name: string;
  logo: string;
}

interface TeamWithPoints extends Team {
  points: number;
}

interface MatchesDetails {
  played: number;
  win: number;
  lose: number;
  draw: number;
  goals: {
    for: number;
    against: number;
  };
}

interface LeagueTeamData {
  rank: number;
  team: Team & { id: number };
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string | null;
  all: MatchesDetails;
  home: MatchesDetails;
  away: MatchesDetails;
  update: string;
}

interface LeagueData {
  id: number;
  name: string;
  country: string;
  season: number;
  logo: string;
  flag: string;
  standings: Array<LeagueTeamData>;
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

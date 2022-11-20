import React from 'react';

import { leagues, seasons } from '../../constants';
import styles from './LeaguePicker.module.css';
import LeagueTable from './LeagueTable';
import { League, LeagueData, Season } from '../../types';
import LeagueCard from './LeagueCard';
import SeasonCard from './SeasonCard';
import { getStandings } from '../../utils/fetchStandings';

export default function LeaguePicker() {
  const [selectedLeague, setSelectedLeague] = React.useState<League | null>(
    null
  );
  const [selectedSeason, setSelectedSeason] = React.useState<Season | null>(
    null
  );
  const [leagueData, setLeagueData] = React.useState<LeagueData | null>(null);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // @todo: add validation modal or error message
    if (!selectedLeague || !selectedSeason) return;
    setLoading(true);
    try {
      const newLeagueData: LeagueData = await getStandings(
        selectedLeague,
        selectedSeason
      );
      setLeagueData(newLeagueData);
    } catch {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Choose a league to see the standings</p>
        <div className="grid">
          {leagues.map((league) => (
            <label key={`league-${league.id}`}>
              <input
                className={`${styles.radioInput} ${styles.radioInputLeague}`}
                type="radio"
                checked={selectedLeague?.id === league.id}
                onChange={() => setSelectedLeague(league)}
              />
              <LeagueCard
                league={league}
                isActive={selectedLeague?.id === league.id}
              />
            </label>
          ))}
        </div>

        <br />
        <p>Choose the season you would like to discover</p>
        <div className="grid">
          {seasons.map((season) => (
            <label key={`season-${season.id}`}>
              <input
                className={`${styles.radioInput} ${styles.radioInputSeason}`}
                type="radio"
                checked={selectedSeason?.id === season.id}
                onChange={() => setSelectedSeason(season)}
              />
              <SeasonCard
                season={season}
                isActive={selectedSeason?.id === season.id}
              />
            </label>
          ))}
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
      {loading && <p className={styles.loading}>Loading...</p>}
      {!!error && !loading && (
        <p className={styles.error}>Something went wrong</p>
      )}
      {!error && !loading && leagueData && (
        <LeagueTable leagueData={leagueData} />
      )}
    </div>
  );
}

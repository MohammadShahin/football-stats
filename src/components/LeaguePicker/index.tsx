import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeagueCard from 'src/components/LeaguePicker/LeagueCard';
import { leagues, seasons } from '../../constants';
import styles from './LeaguePicker.module.css';
import LeagueTable from './LeagueTable';
import { League, LeagueData, Season } from '../../types';
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

    if (!selectedLeague) {
      toast('Please select a league', {
        position: 'top-right',
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        type: 'error',
      });
      return;
    }
    if (!selectedSeason) {
      toast('Please pick a season', {
        position: 'top-right',
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        type: 'error',
      });
      return;
    }

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
            <label key={`season-${season.name}`}>
              <input
                className={`${styles.radioInput} ${styles.radioInputSeason}`}
                type="radio"
                checked={selectedSeason?.id === season.name}
                onChange={() => setSelectedSeason(season)}
              />
              <SeasonCard
                season={season}
                isActive={selectedSeason?.name === season.name}
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

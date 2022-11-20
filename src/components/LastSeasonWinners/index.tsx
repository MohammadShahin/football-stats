import { leagues } from '../../constants';
import useLastSeasonWinners from '../../hooks/useLastSeasonWinners';
import SeasonWinnerCard from './SeasonWinnerCard';

export default function LastSeasonWinners() {
  const { data: lastSeasonWinners, error } = useLastSeasonWinners(leagues);

  if (error) return <div>failed to load</div>;
  if (!lastSeasonWinners) return <div>loading...</div>;

  return (
    <div>
      <p>Here are the last season winners:</p>
      <div className="grid">
        {lastSeasonWinners.map((winner, index) => (
          <SeasonWinnerCard
            key={leagues[index].id}
            team={winner}
            league={leagues[index]}
          />
        ))}
      </div>
    </div>
  );
}

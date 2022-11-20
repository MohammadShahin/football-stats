import Image from 'next/image';
import { League, TeamWithPoints } from '../../../types';
import styles from './SeasonWinnerCard.module.css';

interface Props {
  league: League;
  team: TeamWithPoints;
}

export default function SeasonWinnerCard({ team, league }: Props) {
  return (
    <div className={styles.card}>
      <Image src={team.logo} alt={team.name} width={80} height={80} />
      <p>
        {team.name} ({team.points} points)
      </p>
      <Image src={league.logo} alt={league.name} width={40} height={40} />
      {/* <h2>{league.name}</h2> */}
    </div>
  );
}

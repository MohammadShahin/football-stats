import Image from 'next/image';
import { LeagueData } from '../../../types';
import styles from './LeagueTable.module.css';

interface LeagueTableProps {
  leagueData: LeagueData | null;
}

export default function LeagueTable({ leagueData }: LeagueTableProps) {
  if (!leagueData) return null;
  return (
    <table className={styles.leagueTable}>
      <thead>
        <tr>
          <th>Club</th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        {leagueData.standings.map((standing, index) => (
          <tr key={standing.team.id}>
            <td>
              <span>{index + 1}</span>{' '}
              <Image
                src={standing.team.logo}
                alt={standing.team.name}
                height={32}
                width={32}
              />{' '}
              <span>{standing.team.name}</span>
            </td>
            <td>{standing.all.played}</td>
            <td>{standing.all.win}</td>
            <td>{standing.all.draw}</td>
            <td>{standing.all.lose}</td>
            <td>{standing.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

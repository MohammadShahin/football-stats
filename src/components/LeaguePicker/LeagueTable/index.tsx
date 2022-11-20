import { LeagueData } from '../../../types'
import styles from './LeagueTable.module.css'

interface LeagueTableProps {
  leagueData: LeagueData | null
}

export default function LeagueTable({ leagueData }: LeagueTableProps) {
  if (!leagueData) return null
  return (
    <table className={styles.leagueTable}>
      <thead>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {leagueData.standings.map((standing, index) => (
          <tr key={standing.team}>
            <td>{index + 1}</td>
            <td>{standing.team}</td>
            <td>{standing.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

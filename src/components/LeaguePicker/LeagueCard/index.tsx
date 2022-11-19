import { type League } from '../../../types'
import styles from './LeagueCard.module.css'

interface LeagueCardProps {
  league: League
  isActive: boolean
}

export default function LeagueCard({ league, isActive }: LeagueCardProps) {
  return (
    <div className={styles.card + (isActive ? ' ' + styles.active : '')}>
      <p>{league.name}</p>
      <p>{league.country}</p>
    </div>
  )
}

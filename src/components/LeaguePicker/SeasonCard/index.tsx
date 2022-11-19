import { type Season } from '../../../types'
import styles from './SeasonCard.module.css'

interface SeasonCardProps {
  season: Season
  isActive: boolean
}

export default function SeasonCard({ season, isActive }: SeasonCardProps) {
  return (
    <div className={styles.card + (isActive ? ' ' + styles.active : '')}>
      {season.name}
    </div>
  )
}

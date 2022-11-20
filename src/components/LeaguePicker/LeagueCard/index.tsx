import { type League } from '../../../types'
import styles from './LeagueCard.module.css'
import Image from 'next/image'

interface LeagueCardProps {
  league: League
  isActive: boolean
}

export default function LeagueCard({ league, isActive }: LeagueCardProps) {
  return (
    <div className={styles.card + (isActive ? ' ' + styles.active : '')}>
      <Image src={league.logo} alt={league.name} width={50} height={50} />
      <p>{league.name}</p>
      <div className={styles.flexRow}>
        <p>{league.country}</p>
        <Image src={league.flag} alt={league.country} width={30} height={30} />
      </div>
    </div>
  )
}

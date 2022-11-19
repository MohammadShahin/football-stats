import type { NextPage } from 'next'
import LeaguePicker from '../src/components/LeaguePicker'
import styles from '../styles/Home.module.css'

const Discover: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Discover your favorite league</h1>
      <LeaguePicker />
    </div>
  )
}

export default Discover

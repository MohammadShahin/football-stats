import type { NextPage } from 'next'
import RandomFact from '../src/components/RandomFact'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Football Stats app!</h1>
      <RandomFact />
    </div>
  )
}

export default Home

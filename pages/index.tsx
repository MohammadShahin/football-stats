import type { NextPage } from 'next';
import LastSeasonWinners from '../src/components/LastSeasonWinners';
import RandomFact from '../src/components/RandomFact';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <h1>Welcome to Football Stats app!</h1>
    <RandomFact />
    <br />
    <LastSeasonWinners />
  </div>
);

export default Home;

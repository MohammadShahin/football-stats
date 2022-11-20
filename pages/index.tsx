import type { NextPage } from 'next';
import LastSeasonWinners from '../src/components/LastSeasonWinners';
import RandomFact from '../src/components/RandomFact';

const Home: NextPage = () => (
  <div>
    <h1>Welcome to Football Stats app!</h1>
    <RandomFact />
    <br />
    <LastSeasonWinners />
  </div>
);

export default Home;

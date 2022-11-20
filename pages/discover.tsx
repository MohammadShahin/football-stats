import type { NextPage } from 'next';
import LeaguePicker from '../src/components/LeaguePicker';

const Discover: NextPage = () => (
  <div>
    <h1>Discover your favorite league</h1>
    <LeaguePicker />
  </div>
);

export default Discover;

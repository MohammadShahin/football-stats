import useSWR from 'swr';
import axios from 'axios';
import React from 'react';
import { RandomFactResponse } from '../../types';
import styles from './RandomFact.module.css';

const RANDOM_FACT_URL = '/api/random-fact';

export default function RandomFact() {
  async function fetcher(url: string): Promise<RandomFactResponse> {
    return axios.get(url).then((res) => res.data);
  }

  const { data, error } = useSWR(RANDOM_FACT_URL, fetcher);
  const [mainFact, setMainFact] = React.useState('');
  const [factDetails, setFactDetails] = React.useState('');

  React.useEffect(() => {
    if (data) {
      const splitted = data.fact.split('.', 1);
      setMainFact(`${splitted[0]}.`);
      setFactDetails(data.fact.substring(splitted[0].length + 1));
    }
  }, [data]);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      <p className={styles.title}>Random Football Fact</p>{' '}
      <p>
        <span className={styles.mainFact}> {mainFact} </span> {factDetails}
      </p>
    </div>
  );
}

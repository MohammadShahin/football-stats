// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { TeamWithPoints } from '../../src/types';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'football-stats-e2dd2.firebaseapp.com',
  databaseURL: 'https://football-stats-e2dd2-default-rtdb.firebaseio.com',
  projectId: 'football-stats-e2dd2',
  storageBucket: 'football-stats-e2dd2.appspot.com',
  messagingSenderId: '417343238913',
  appId: '1:417343238913:web:db32b17beaa51344992100',
  measurementId: 'G-5EYGHLJ6KJ',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

type Data = TeamWithPoints;
type ErrorMessage = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorMessage>
) {
  if (req.method === 'GET') {
    const leagueId = req.query.id;
    if (leagueId && typeof leagueId === 'string') {
      const winnerRef = ref(db, `winners/${leagueId}`);
      onValue(winnerRef, (snapshot) => {
        const data = snapshot.val();
        res.status(200).json(data);
      });
    } else {
      res.status(400).json({ message: 'Bad request' });
    }
  }
}

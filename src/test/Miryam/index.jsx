import { useEffect } from 'react'
import styles from './style.module.scss'
import ChallengeCard from '../../components/ChallengeCard';
import { NavLink } from 'react-router-dom';
import { useApi } from '../../api/useApi';
import { useUserStore } from '../../store';
import QuestionsCard from '../../components/QuestionsCard';

export default function Miryam() {
  let { data } = useApi({ method: 'get', path: '/challenge/start/665739933ccf2b71c3eb3e92' })
  console.log(data);
  const setCurrentChallenge = useUserStore(state => state.setCurrentChallenge)
  useEffect(() => {
    setCurrentChallenge(data)
  }, [data])
  return (
    <div>
      <ul style={{ fontSize: '60px'}}>
        <li><NavLink to={'/665739933ccf2b71c3eb3e92/665c474f0008e626beeb7db9'}>study</NavLink></li>
        <li><NavLink to={'/665739933ccf2b71c3eb3e92/665c474f0008e626beeb7db9'}>task</NavLink></li>
        <li><NavLink to={'/665739933ccf2b71c3eb3e92/665c474f0008e626beeb7dc5'}>שאלה</NavLink></li>
        <li><NavLink to={'/665739933ccf2b71c3eb3e92/665c474f0008e626beeb7dcb'}>שאלה</NavLink></li>
        <li><NavLink to={'/665739933ccf2b71c3eb3e92/665c474f0008e626beeb7db9'}>אתגר</NavLink></li>
        <li><NavLink to={'/665739933ccf2b71c3eb3e92/665c474f0008e626beeb7db9'}>מזל</NavLink></li>
      </ul>
    </div>
  )
}

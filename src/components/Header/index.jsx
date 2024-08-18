import { useUserStore } from '../../store'
import ProgressBar from '../ProgressBar'
import styles from './style.module.scss'

export default function Header({ progress }) {
  const currentChallenge = useUserStore(state => state.currentChallenge)
  const cardsToday = currentChallenge?.cardsOfToday?.filter(c => c.cardType !== 'lottery')?.length || 0
  
  return (
    <div className={styles.Header}>
      <div className={styles.progressAndIcon}>
        <div className={styles.ProgressBar}>
          <ProgressBar cardsOfToday={currentChallenge.cardsOfToday} />
        </div>
        <div className={styles.arrowIcon}>
          <svg width="8" height="6" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L7 7L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className={styles.cardfortoday}>
        {progress} / {cardsToday} cards for today
      </div>
    </div>
  )
}

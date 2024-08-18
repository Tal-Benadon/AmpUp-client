import React from 'react';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import { bookIcon, coinIcon, coins, handShakeIcon, heartIcon, movieIcon, questionIcon, shareIcon, snow } from './icons';
import styles from "./style.module.scss";
import { Link, useParams } from 'react-router-dom';
import { useUserStore } from '../../store';

export default function Reward({ daysStreak = 14, sumTotalCoin = 120000 }) {
  const { activeChallengeId } = useParams()
  const currentChallenge = useUserStore(state => state.currentChallenge)
  const setIsDayCompleted = useUserStore(state => state.setIsDayCompleted)
  console.log(currentChallenge);
  const streak = [{ icon: snow, content: "3 Days Streak Freeze" }, { icon: coins, content: "Double Points" }, { icon: snow, content: "3 Days \n Streak Freeze" }]

  const allProgress = [{ iconP: heartIcon, contentP: "Set up the Goal", sum: 100 },
  { iconP: questionIcon, contentP: "Ask the Question", sum: 100 },
  { iconP: movieIcon, contentP: "Watch the Video", sum: 100 },
  { iconP: bookIcon, contentP: "Read the Article", sum: 100 },
  { iconP: handShakeIcon, contentP: "Send Support", sum: 100 },
  { iconP: shareIcon, contentP: "Commitment Opportunity", sum: 100 }]
  const sumCoin = () => { return allProgress.reduce((total, current) => total + current.sum, 0); }

  return (
    <main className={styles.teamScreen}>
      <Logo />
      <div className={styles.daysStreak}>{daysStreak}</div>
      <div className={styles.daysStreak2}>
        <div>
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2117 0.657468C11.4106 0.372356 11.185 0 10.8134 0H3.45866C3.2654 7.56666e-05 3.09172 0.10722 3.02041 0.270433L0.533652 5.96594C0.410951 6.24704 0.638944 6.55205 0.971894 6.55205H4.60895C4.91041 6.55205 5.1344 6.80546 5.06926 7.07286L3.57821 13.1921L3.50872 13.4773C3.39918 13.927 4.04142 14.1953 4.34597 13.827L4.44625 13.7057L11.4047 5.28986C11.6381 5.00762 11.4163 4.60447 11.0277 4.60447H9.31516C8.94355 4.60447 8.71806 4.23211 8.9169 3.947L11.2117 0.657468ZM8.41162 1.7H4.25121L2.87497 4.85205H4.60895C5.79498 4.85205 7.09598 5.93576 6.72096 7.47522L6.4406 8.6258L8.49085 6.14613C8.05989 5.97328 7.69219 5.66647 7.44804 5.26337C7.04821 4.60325 7.00998 3.70945 7.5225 2.97455L8.41162 1.7Z" fill="#FFD05B" />
          </svg>
        </div>
        <div>Days Streak</div>
      </div>
      <div className={styles.all}>
        {streak.map((item, index) => <div key={index} className={styles.streak}>
          <div className={styles.icon}>
            {item.icon}
          </div>
          <div className={styles.iconquestion}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.38194 0.27832C4.64454 0.27832 0.810547 4.11189 0.810547 8.84975C0.810547 13.5871 4.6441 17.4212 9.38194 17.4212C14.1193 17.4212 17.9533 13.5876 17.9533 8.84975C17.9533 4.11233 14.1198 0.27832 9.38194 0.27832ZM9.12831 12.8615C8.64316 12.8615 8.27084 12.4554 8.27084 11.9928C8.27084 11.5189 8.65444 11.124 9.12831 11.124C9.60221 11.124 9.99703 11.5189 9.99703 11.9928C9.99703 12.4553 9.61343 12.8615 9.12831 12.8615ZM10.4145 8.47261C9.79397 8.95776 9.78265 9.29623 9.78265 9.88291C9.78265 10.0973 9.66981 10.3455 9.11699 10.3455C8.65437 10.3455 8.49647 10.1763 8.49647 9.5896C8.49647 8.61929 8.92521 8.1567 9.25239 7.87465C9.62471 7.55871 10.2566 7.20899 10.2566 6.59975C10.2566 6.08071 9.80525 5.83251 9.24111 5.83251C8.0903 5.83251 8.33854 6.7013 7.72923 6.7013C7.42461 6.7013 7.05229 6.49816 7.05229 6.05818C7.05229 5.44893 7.7518 4.54629 9.27496 4.54629C10.7191 4.54629 11.6781 5.34738 11.6781 6.40793C11.6781 7.46848 10.7191 8.23569 10.4145 8.47261Z" fill="#AEACAC" />
            </svg>
          </div>
          <div className={styles.content}>{item.content}</div>
        </div>
        )}
      </div>
      <div className={styles.all2}>
        {allProgress.map((item) => <div>
          <div className={styles.item}>
            <div className={styles.iconP}>{item.iconP}</div>
            <div>{item.contentP}</div>
            <div className={styles.sum}>+{item.sum}  {coinIcon}</div>
          </div>
          <div className={styles.line}></div>
        </div>)}
        <div className={styles.today}>
          <div>Today's Points:</div>
          <div className={styles.sum}> +{sumCoin()}  {coinIcon}</div>
        </div>
        <div className={styles.total}>
          <div>Team Points:</div>
          <div className={styles.sum}>{sumTotalCoin}  {coinIcon}</div>
        </div>
      </div>
      <Link to={`/challenge/${activeChallengeId}`}>
        <Button classname={styles.button} onClick={setIsDayCompleted}>
          <div className={styles.collectbutton}>Collect My Wins </div>
        </Button>
      </Link>
      {/* <Footer /> */}
    </main>
  )
}

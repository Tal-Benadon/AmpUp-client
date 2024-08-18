import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Dots from '../../components/Dots';
import Footer from '../../components/Footer';
import LogoAndProfile from '../../components/LogoAndProfile';
import Profile from '../../components/Profile';
import ProgressDaily from '../../components/ProgressDaily';
import { useUserStore } from '../../store';
import styles from "./style.module.scss";
import { apiRequest } from '../../api/apiRequest';


export default function Home() {
  const nav = useNavigate()
  const setCurrentChallenge = useUserStore(state => state.setCurrentChallenge)

  const currentChallenge = useUserStore((state) => state.currentChallenge)
  const { activeChallengeId } = useParams()
  const { cardsOfToday, totalDays, completedDays, coach, challengeName, streakNum } = currentChallenge
  const cardsWithOutLottery = cardsOfToday?.filter(c => c.cardType != 'lottery')
  const isDone = !cardsOfToday?.every(c => !c.done)
  console.log(
    currentChallenge
  );

  // useEffect(() => {
  //   apiRequest({ method: "GET", path: `/activeChallenge/status/${activeChallengeId}` })
  //     .then(data => { setCurrentChallenge(data) })
  //     .catch(console.error)
  // }, [isDayCompleted])

  return (
    <>
      <main className={styles.teamScreen}>
        <div className={styles.top}>
          <LogoAndProfile />
          <div className={styles.days}>
            <div className={styles.leftDays}>
              {streakNum}
            </div>
            <div className={styles.streak}>
              <div>
                DAY STREAK
              </div>
              <div className={styles.streakDays}>
                {cardsOfToday[0]?.day} day / {totalDays}
              </div>
            </div>
            <div className={styles.dots}>

              <Dots today={cardsOfToday[0]?.day} arrDone={completedDays} totalDays={totalDays} />
            </div>
          </div>
        </div>
        <div className={styles.middle}>
        </div>
        <div className={styles.bottom}>
          <Profile img={coach.picture} name={coach.fullName} role={challengeName} includeName={true} />
          {/* <ChallengeName text={challengeName}/> */}
          {isDone == false && <div className={styles.button}>
            <Button classname={styles.button} onClick={() => nav(`/challenge/${activeChallengeId}/${cardsOfToday[0]?._id}`)}>
              Start Daily Deck
            </Button>
          </div>}
          {isDone == true && <ProgressDaily cardsOfToday={cardsWithOutLottery} />}
        </div>
      </main>
      <Footer />
    </>
  );
}
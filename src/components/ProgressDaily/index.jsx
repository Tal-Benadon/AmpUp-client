import React from 'react'
import styles from "./style.module.scss";
import ProgressBar from '../ProgressBar';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProgressDaily({ cardsOfToday = [] }) {
    const nav = useNavigate()
    const { activeChallengeId } = useParams()
    // const everyTrue = (num) => {
    //     cardsOfToday.forEach((c, i) => { if (num > i) c.done = true })
    // }
    // everyTrue(2)
    
    let cardIsNotDone = cardsOfToday.find(c => !c.done)
    let numDone = 0, total = cardsOfToday.length;
    cardsOfToday.forEach(c => numDone += c.done ? 1 : 0)
    let isDone = numDone < total;

    return (
        <div className={styles.progAndArrow}>
            <div>
                <div className={styles.progressBar}>
                    <ProgressBar cardsOfToday={cardsOfToday} />
                </div>
                <div className={styles.cardfortoday}>
                    {isDone ?
                        <>Today's cards: <b>{numDone}</b> / {total} done</> :
                        <>✨ <b>{total} of {total} </b> done, see you tomorrow!</>
                    }
                </div>
            </div>
            {isDone && <div onClick={() => nav(`/challenge/${activeChallengeId}/${cardIsNotDone._id}`)} className={styles.arrowIcon}>
                <svg width="8" height="6" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L7 7L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            }
        </div>
    )
}

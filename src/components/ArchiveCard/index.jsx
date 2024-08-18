import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'


export default function ArchiveCard({ card, startDate, challengeId, cards }) {

    const calculateDate = (start, days) => {
        const startDateObj = new Date(start);
        startDateObj.setDate(startDateObj.getDate() + parseInt(days, 10));
        const month = ('0' + (startDateObj.getMonth() + 1)).slice(-2);
        const day = ('0' + startDateObj.getDate()).slice(-2);
        return `${month}-${day}`;
    };

    let date = calculateDate(startDate, card.day)



    return (
        <NavLink to={`/archive/${challengeId}/${card._id}`} state={{ cards }} className={styles.navContainer}>
            <div className={styles.cardContainer}>
                <img src={'https://media.istockphoto.com/id/1499165924/photo/donkey-head-close-up-in-a-prairie.jpg?s=2048x2048&w=is&k=20&c=oMtZ2b1cm-vx8KkTcjmWJkDwS7wYfJPPgtTQ2p9k50Y=' || card.image} className={styles.cardImg} />

                <div className={styles.dateInfo}>
                    <img src={'/calendar.svg'} className={styles.calendarIcon} />
                    <div className={styles.date}>{date}</div>
                    <img src={'Ellipse.svg'} className={styles.dotIcon} />
                    <div className={styles.cardDay}>{card.day}</div>
                </div>

                <div className={styles.mainTitle}>
                    <img src={'/Open book.svg'} className={styles.bookIcon} />
                    <div className={styles.cardTitle}>{card.title}</div>
                </div>

            </div>
        </NavLink>
    )
}

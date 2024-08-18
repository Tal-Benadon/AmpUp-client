import React, { useState } from 'react'
import { useApi } from '../../api/useApi'
import ArchiveCard from '../../components/ArchiveCard'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import Profile from '../../components/Profile'
import styles from './style.module.scss'

export default function Archive() {

    const [isOpen, setIsOpen] = useState(false)
    const { data: challenges = [], loading, error } = useApi({ method: "GET", path: '/archive/pastChallenges' })
    console.log(challenges[0]?.cards?.[0]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }


    function extractMonthDay(dateString) {
        const [year, month, day] = dateString.split("-");
        if (!month || !day) {
            console.error('Invalid date string:', dateString);
            return null;
        }
        return `${month}-${day}`;
    }


    return (
        <>
            <main className={styles.archiveContainer}>

                <div className={styles.teamScreen}>
                    <Logo />
                    <div className={styles.profile}>
                        <Profile includeName={false} img="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <div className={styles.coins}>
                            25,000
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.84186 5.83566L7.54735 6.22637L7.46921 6.36746C7.16242 6.92145 6.67824 7.35617 6.09452 7.60173C5.51081 7.84729 4.86148 7.88943 4.25092 7.72137C3.64037 7.55331 3.10407 7.18482 2.72824 6.67514C2.35241 6.16545 2.1589 5.54419 2.17882 4.91124C2.19873 4.27829 2.43091 3.67043 2.83803 3.18538C3.24515 2.70033 3.80356 2.36628 4.42347 2.23693C5.04338 2.10758 5.68879 2.19046 6.25591 2.47223C6.82303 2.754 7.27892 3.21829 7.55029 3.79046L7.61941 3.93619L6.89075 4.28178L6.82164 4.13605C6.6278 3.72735 6.30216 3.39571 5.89708 3.19445C5.49199 2.99318 5.03099 2.93399 4.5882 3.02638C4.1454 3.11877 3.74654 3.35738 3.45574 3.70384C3.16494 4.05031 2.99909 4.4845 2.98487 4.9366C2.97064 5.38871 3.10887 5.83247 3.37731 6.19653C3.64576 6.56059 4.02884 6.8238 4.46495 6.94384C4.90106 7.06388 5.36487 7.03378 5.7818 6.85838C6.19874 6.68298 6.54458 6.37246 6.76372 5.97676L6.84186 5.83566ZM5 9.19355C7.31603 9.19355 9.19355 7.31603 9.19355 5C9.19355 2.68397 7.31603 0.806452 5 0.806452C2.68397 0.806452 0.806452 2.68397 0.806452 5C0.806452 7.31603 2.68397 9.19355 5 9.19355ZM10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5ZM6.96737 4.06693C6.75803 3.62554 6.40634 3.26737 5.96884 3.05C5.53135 2.83264 5.03347 2.76871 4.55525 2.86849C4.07703 2.96827 3.64626 3.22597 3.3322 3.60015C3.01813 3.97433 2.83902 4.44326 2.82366 4.93153C2.8083 5.41981 2.95758 5.89906 3.2475 6.29225C3.53742 6.68543 3.95114 6.9697 4.42214 7.09934C4.89314 7.22899 5.39406 7.19648 5.84435 7.00705C6.29464 6.81761 6.66815 6.48226 6.90482 6.0549L7.32812 6.28932C7.30199 6.3365 7.2745 6.38276 7.2457 6.42805C6.95562 6.88424 6.53263 7.24244 6.03198 7.45306C5.48162 7.68459 4.86939 7.72432 4.29373 7.56586C3.71806 7.40741 3.21241 7.05997 2.85806 6.57941C2.50371 6.09886 2.32125 5.5131 2.34003 4.91632C2.3588 4.31954 2.57772 3.74641 2.96157 3.28907C3.34543 2.83174 3.87193 2.51677 4.45642 2.39482C5.04091 2.27286 5.64943 2.351 6.18414 2.61667C6.67056 2.85834 7.0702 3.24243 7.33102 3.71594C7.35692 3.76295 7.38144 3.81085 7.40455 3.85957C7.40455 3.85956 7.40455 3.85957 7.40455 3.85957L6.96737 4.06693ZM5.64516 5C5.64516 5.35631 5.35631 5.64516 5 5.64516C4.64369 5.64516 4.35484 5.35631 4.35484 5C4.35484 4.64369 4.64369 4.35484 5 4.35484C5.35631 4.35484 5.64516 4.64369 5.64516 5ZM5 9.35484C7.40511 9.35484 9.35484 7.40511 9.35484 5C9.35484 2.59489 7.40511 0.645161 5 0.645161C2.59489 0.645161 0.645161 2.59489 0.645161 5C0.645161 7.40511 2.59489 9.35484 5 9.35484ZM5 9.83871C7.67234 9.83871 9.83871 7.67234 9.83871 5C9.83871 2.32765 7.67234 0.16129 5 0.16129C2.32765 0.16129 0.16129 2.32765 0.16129 5C0.16129 7.67234 2.32765 9.83871 5 9.83871ZM5 5.48387C5.26723 5.48387 5.48387 5.26723 5.48387 5C5.48387 4.73277 5.26723 4.51613 5 4.51613C4.73277 4.51613 4.51613 4.73277 4.51613 5C4.51613 5.26723 4.73277 5.48387 5 5.48387Z" fill="#FFD05B" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.title}>Archive</div>

                    <ul>
                        {
                            challenges.map(challenge =>
                                <li className={styles.challengeCard}>
                                    <div className={`${styles.innerChallenge} ${isOpen ? styles.challengeOpen : ''}`}>
                                        <div className={styles.challengeInfo}>
                                            <div className={styles.challengePic}>
                                                <Profile name={challenge.creator.fullName}
                                                    role={challenge.challengeName}
                                                    includeName={true}
                                                    img={challenge.creator.picture} />
                                            </div>

                                            <div className={styles.datesContainer}>
                                                <img src={'/calendar.svg'} />
                                                <div className={styles.challengeDates}>
                                                    {extractMonthDay(challenge.startDate)} - {extractMonthDay(challenge.endDate)}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.cardLeft}>
                                            <div className={styles.cardsCont}>
                                                <div className={styles.cardsNum}>
                                                    {challenge.cards.length}
                                                </div>
                                                <img src={'/Open book.svg'} className={styles.book} />
                                            </div>
                                            {
                                                !isOpen ? (
                                                    <img src={'/chevron-down.svg'} className={styles.arrow} onClick={() => handleOpen(challenge._id)} />
                                                )
                                                    : <img src={'/arrowUp.svg'} className={styles.arrow} onClick={() => handleOpen(challenge._id)} />
                                            }
                                        </div>
                                    </div>
                                    {isOpen &&
                                        <div className={styles.cardsMap}>
                                            {
                                                challenge.cards.map(card => (
                                                    <ArchiveCard key={card.id} cards={challenge.cards} challengeId={challenge._id} card={card} startDate={extractMonthDay(challenge.startDate)} />
                                                ))
                                            }</div>
                                    }
                                </li>
                            )
                        }
                    </ul>
                    {/* <div className={styles.footerCont} > */}
                    {/* </div> */}
                        <Footer />
                </div >
            </main >
        </>

    )
}

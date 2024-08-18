import React from 'react';
import Profile from '../../components/Profile';
import styles from './style.module.scss';

import { RiInstagramFill } from "react-icons/ri";
import { useApi } from '../../api/useApi';
import { useUserStore } from '../../store';
import { arrowIcon, backtikLeft, backtikRight, iconCalendar, iconOut, linkIcon } from './icons';
import { Link } from 'react-router-dom';

export default function UserProfile() {
    const { data } = useApi({ method: "GET", path: 'member/personal-info/challenges' })
    const {member: user} = useUserStore(state => state.user)

    return (
        <>
            <main className={styles.userProfile}>
                <div className={styles.top}>
                    <Link to={-1} className={styles.iconArrow}>
                        {arrowIcon}
                    </Link>
                </div>


                <div className={styles.middle}>

                    <div className={styles.profile}>
                        <div className={styles.profileImg}>
                            <Profile width={'140px'} height={'140px'} img={user.img} />
                        </div>
                        <h3 className={styles.name}>{user.fullName}</h3>
                    </div>

                    <div className={styles.containerAbout}>
                        <div className={styles.textAbout}>
                            <div className={styles.backtik}>
                                {backtikLeft}
                            </div>
                            <h3 className={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"</h3>

                            <div className={styles.backtik}>
                                {backtikRight}
                            </div>
                        </div>


                        <div className={styles.link}>
                            <div className={styles.icon}>
                                {linkIcon}
                            </div>
                            <a>{user.link}</a>
                        </div>


                        <div className={styles.instaContainer}>
                            <div className={styles.instagram}>
                                <div className={styles.iconInsta}>
                                    <RiInstagramFill />
                                </div>
                                <h1>Instagram</h1>
                            </div>

                            <div className={styles.iconOut}>
                                {iconOut}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <h2 className={styles.tital}>Challenges</h2>
                    <div className={styles.listOfChallenges}>
                        {data?.map((c) => (
                            <div className={styles.listMap}>
                                <div className={styles.challengeInfo} key={c._id}>
                                    <Profile className={styles.creatorName} name={c.challenge.creator.fullName} img={c.challenge.creator.picture} width='50px' height='50px' />
                                    <p className={styles.concat}>{c.challengeName}</p>

                                    <div className={styles.iconActive}>
                                        {iconCalendar}
                                        {c.startDate}- {c.endDate}
                                    </div>
                                </div>
                                <div className={styles.line}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </main >
        </>
    );
}



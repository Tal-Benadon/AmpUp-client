import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Profile from '../../components/Profile';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import styles from "./style.module.scss";
import Element from '../../components/Element';
import Members from '../../components/Members';
import { formatDateRange } from './../../functions/getDateFormat.js'
import { useApi } from '../../api/useApi';
import { apiRequest } from '../../api/apiRequest.js';
import { useNavigate, useParams } from 'react-router-dom';

export default function TeamScreen() {
    const nav = useNavigate()
    const { activeChallengeId } = useParams()

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [buttonLoader, setButtonLoader] = useState(false)


    const fetchData = async () => {
        const response = await apiRequest({ method: "GET", path: `activeChallenge/start/${activeChallengeId}` })
        setData(response)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])


    const handleOnClick = async () => {
        setButtonLoader(true)
        let data = await apiRequest({ method: "POST", path: `activeChallenge/join/${activeChallengeId}` })
        if (data.success) {
            setButtonLoader(false)
            nav(`/challenge/${activeChallengeId}`)
        }
    }

    if (loading) {
        return <div>...LOADING</div>
    } else
        return (
            <>
                <main className={styles.teamScreen}>
                    <div className={styles.top}>
                        <Logo />
                    </div>
                    <div className={styles.middle}>
                    </div>
                    <div className={styles.bottom}>
                        <Element classname={styles.dates}>
                            {formatDateRange(data.startDate, data.futureDate)}
                        </Element>
                        <Profile />
                        <Title content={data.challenge.challengeName} />
                        <p>
                            {data.challenge.subDescription}
                        </p>

                        <div className={styles.buttonAndMembers}>
                            <Members classname={styles.members} members={data.participants} />
                            <Button onClick={handleOnClick} classname={styles.button}>
                                {buttonLoader ? 'Loading' : 'Join Challenge'}
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 13.25L13.25 0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M0.75 0.75H13.25V13.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Button>
                        </div>

                    </div>
                </main>
            </>
        );
}

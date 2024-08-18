
import React from 'react';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Title from '../../components/Title';
import styles from "./style.module.scss";

export default function CantFindChallenge() {
    return (
        <>
            <main className={styles.teamScreen}>
                <div className={styles.top}>
                    <Logo />
                </div>
                <div className={styles.middle}>
                </div>
                <div className={styles.bottom}>

                    <Title content="Welcome  to AmpUp!" />
                    <p>
                        We have not been able to match you with any challenges, please contact your coach to make sure you're on their list.
                        If you have any other questions or would like to run a challenge for your community on AmpUp please leave your details here and we'll be in touch shortly.
                    </p>

                    <div className={styles.buttonAndMembers}>

                        <Button classname={styles.button}>
                            Connect

                        </Button>
                    </div>
                    <h3 className={styles.faq}>FAQ</h3>

                </div>
            </main>
        </>
    );
}

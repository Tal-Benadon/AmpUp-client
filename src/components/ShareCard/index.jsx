import ChallengeName from '../ChallengeName'
import IconCard from '../IconCard'
import Profile from '../Profile'
import styles from './style.module.scss'
import Button from '../Button'
import Input from '../Input'

export default function ShareCard({ daysDone = "2k", userName = "Julia Tsyhanenko" }) {
  return (
    <div className={styles.ShareCard}>
      <ChallengeName text='The  ADHD  Parenting Challenge' />
      <div className={styles.sendshare}>
        <IconCard>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_631_6286)">
              <path d="M12.6875 10.375C11.7612 10.375 10.945 10.8307 10.4323 11.5236L5.99969 9.25387C6.07328 9.00303 6.125 8.74306 6.125 8.46875C6.125 8.09669 6.04872 7.74297 5.91694 7.41762L10.5558 4.62612C11.0721 5.232 11.8309 5.625 12.6875 5.625C14.2384 5.625 15.5 4.36341 15.5 2.8125C15.5 1.26159 14.2384 0 12.6875 0C11.1366 0 9.875 1.26159 9.875 2.8125C9.875 3.16991 9.94859 3.50894 10.0707 3.82369L5.41797 6.62337C4.90216 6.0355 4.15428 5.65625 3.3125 5.65625C1.76159 5.65625 0.5 6.91784 0.5 8.46875C0.5 10.0197 1.76159 11.2812 3.3125 11.2812C4.25406 11.2812 5.08409 10.8122 5.59484 10.0998L10.0128 12.3622C9.93147 12.6248 9.875 12.8984 9.875 13.1875C9.875 14.7384 11.1366 16 12.6875 16C14.2384 16 15.5 14.7384 15.5 13.1875C15.5 11.6366 14.2384 10.375 12.6875 10.375Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_631_6286">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </IconCard>
        <div>Commitment Opportunity</div>
      </div>
      <div className={styles.Profile}>
        <Profile width='90px' height='90px' />
        <div className={styles.userName}>{userName}</div>
        <div className={styles.daysDone1}>
          <div className={styles.daysDone}>I publicly take action to achieve</div>
          <div className={styles.daysDone}> {daysDone} Points!</div>
        </div>
        <div className={styles.piska}>Each time your friends click,</div>
        <div className={styles.piska}>you get support points!</div>
      </div>
      <Input type={"text"} name={"support"} placeholder={"Write something..."} />
      <div className={styles.button2}>
        <Button>
      <div className={styles.button}>
          <div className={styles.share}>Share</div>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 6.6665C16.8807 6.6665 18 5.54722 18 4.1665C18 2.78579 16.8807 1.6665 15.5 1.6665C14.1193 1.6665 13 2.78579 13 4.1665C13 5.54722 14.1193 6.6665 15.5 6.6665Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 12.5C6.88071 12.5 8 11.3807 8 10C8 8.61929 6.88071 7.5 5.5 7.5C4.11929 7.5 3 8.61929 3 10C3 11.3807 4.11929 12.5 5.5 12.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.5 18.3335C16.8807 18.3335 18 17.2142 18 15.8335C18 14.4528 16.8807 13.3335 15.5 13.3335C14.1193 13.3335 13 14.4528 13 15.8335C13 17.2142 14.1193 18.3335 15.5 18.3335Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.6582 11.2583L13.3499 14.575" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.3415 5.4248L7.6582 8.74147" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
      </div>
        </Button>
      </div>
      <div className={styles.skip}>Skip for today</div>
    </div>
  )
}

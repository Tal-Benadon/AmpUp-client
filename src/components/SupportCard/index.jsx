import Button from '../Button'
import ChallengeName from '../ChallengeName'
import IconCard from '../IconCard'
import Input from '../Input'
import Profile from '../Profile'
import styles from './style.module.scss'

import React, { useState } from 'react'

export default function SupportCard({ daysDone = "5", userName = "Rikky Rode", answers = ["👍  Amazing!", "💪  Don't give up!", "🤟 Rock on!"] }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };
  
  return (
    <main className={styles.SupportCard}>
      <ChallengeName text='The  ADHD  Parenting Challenge' />
      <div className={styles.sendsupport}>
        <IconCard>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.34681 10.7995C4.12476 10.5684 3.73595 10.5397 3.48217 10.7324L3.4755 10.7281L2.90116 11.3024C2.77523 11.4279 2.70619 11.5954 2.70619 11.7736C2.69862 12.1322 3.01442 12.4473 3.37271 12.4401C3.5813 12.4435 3.76706 12.3392 3.90311 12.1859L4.34681 11.7422C4.43978 11.6492 4.50216 11.5335 4.52805 11.4075C4.57454 11.1897 4.50581 10.9561 4.34681 10.7995Z" fill="black" />
            <path d="M2.74994 8.84677C2.48996 8.58675 2.06752 8.58702 1.80723 8.84677C1.74674 8.90757 1.37373 9.28034 1.30469 9.3497C0.705127 10.0004 1.59597 10.8916 2.247 10.2924C2.247 10.2924 2.68317 9.85621 2.74994 9.78948C3.01008 9.52977 3.01008 9.10687 2.74994 8.84677Z" fill="black" />
            <path d="M5.71028 12.3193C5.53217 12.3193 5.36466 12.3888 5.23873 12.5147L4.73579 13.0176C4.73344 13.02 4.73109 13.0224 4.72873 13.0251C4.47671 13.2741 4.48048 13.715 4.73579 13.9604C4.99589 14.2201 5.4188 14.2201 5.6785 13.9604L6.18183 13.457C6.59869 13.0412 6.29905 12.3171 5.71028 12.3193Z" fill="black" />
            <path d="M10.1832 4.92075C9.15414 5.56962 7.7744 5.44644 6.87877 4.55081L5.71284 3.38527L7.1679 1.93021C5.60507 0.176409 2.85698 0.0651515 1.19345 1.73998C-0.479108 3.40116 -0.371891 6.146 1.37822 7.70929C2.65274 6.99694 4.22004 7.99191 4.1169 9.44328C4.96083 9.53449 5.67529 10.2994 5.71398 11.1435C6.50757 11.1265 7.29587 11.7209 7.48916 12.5048C8.14984 12.3277 8.89031 12.5471 9.3428 13.0705L9.35614 13.0548C10.0121 13.4487 10.7061 12.6397 10.2114 12.0505L10.2125 12.049C10.2023 12.0392 7.5633 9.40013 7.5633 9.40013C7.77067 9.19275 8.18805 8.77538 8.39538 8.56805L11.0144 11.1871C11.665 11.7865 12.5564 10.8951 11.9567 10.2444L9.33809 7.62534C9.54546 7.41797 9.96284 7.00059 10.1702 6.79326C10.7588 7.38183 12.1868 8.8099 12.7892 9.41229C13.0372 9.67066 13.4839 9.67054 13.7319 9.41229C13.9916 9.15219 13.9916 8.72928 13.7319 8.46958L10.1832 4.92075Z" fill="black" />
            <path d="M14.806 1.74018C13.2113 0.145852 10.6166 0.145852 9.02189 1.74018C8.71181 2.05045 7.66981 3.09269 7.37695 3.38551L7.71041 3.71897C8.29024 4.29879 9.23334 4.29879 9.81277 3.71897L10.229 3.30273C10.4503 3.52646 14.5126 7.5818 14.6267 7.704C16.3727 6.14011 16.4761 3.3992 14.806 1.74018Z" fill="black" />
            <path d="M8.42974 13.8165C8.1696 13.5568 7.74701 13.5564 7.48703 13.8165L6.9841 14.3194C6.72529 14.5675 6.72541 15.014 6.9841 15.2622C7.23254 15.5204 7.67852 15.5202 7.92681 15.2622L8.42974 14.7592C8.688 14.5114 8.688 14.0637 8.42974 13.8165Z" fill="black" />
          </svg>
        </IconCard>
        <div>Send support</div>
      </div>
      <div className={styles.Profile}>
        <Profile width='90px' height='90px' />
        <div className={styles.userName}>{userName}</div>
        <div className={styles.daysDone}>Has done {daysDone} days streak!</div>
      </div>
      <div className={styles.answers}>
        {answers.map((ans, index) => (
          <Button
            key={index}
            classname={`${styles.answer} ${selectedAnswer === index ? styles.selected : ''}`}
            onClick={() => handleAnswerClick(index)}        >
            {ans}
          </Button>
        ))}
      </div>
      <div className={styles.inputicon}>
        <Input type={"text"} borderRadius={"30px"} name={"support"} placeholder={"Write something..."} />
        <div className={styles.iconsend}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.808196 7.83823C0.377459 8.00361 0.0718567 8.39095 0.0108619 8.8481C-0.0495041 9.30588 0.144799 9.75925 0.517685 10.0303L4.59993 13.0008L19.0991 1.5935L6.27823 14.2244L11.8589 18.2853C12.2136 18.5431 12.672 18.6205 13.0939 18.4928C13.5152 18.3645 13.851 18.0445 14.0019 17.6326L19.9719 1.29229C20.0322 1.12629 19.9895 0.940789 19.8637 0.816913C19.7386 0.693037 19.5531 0.65405 19.3871 0.71756L0.808196 7.83823Z" fill="#FFCD5B" />
            <path d="M3.62988 13.9885L3.66447 14.1778L4.45677 18.5097C4.51588 18.8316 4.73093 19.1014 5.03025 19.2316C5.32956 19.3611 5.67478 19.3334 5.94894 19.1567C7.05251 18.4449 8.49374 17.5004 8.45476 17.4451L3.62988 13.9885Z" fill="#FFCD5B" />
          </svg>
        </div>
      </div>
      <div className={styles.skip}>Skip for today</div>
    </main>
  )
}

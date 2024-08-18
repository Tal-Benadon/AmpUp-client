import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Button from '../../components/Button';
import { LuCherry, LuClover } from "react-icons/lu";
import { IoDiamondOutline } from 'react-icons/io5';
import { FaRegBell, FaRegLemon } from 'react-icons/fa';
import { HiOutlineCurrencyYen } from 'react-icons/hi2';
import Footer from '../../components/Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import { useApi } from '../../api/useApi';

export default function Israel() {
  // export default function SlotMachine() {

  // todo: להחליף את המספר אתגר והמספר קלף
  const [challengeId, setChallengeId] = useState("6656df1b8437151db0cce539");
  const [cardId, setCardId] = useState("665c9ccb8c40a76a37aa5d85");
  const { data, loading, error } = useApi(
    { method: "get", path: `/luck/resultCasino/${challengeId}/cardId/${cardId}` }
  );

  const nav = useNavigate();

  const [winningSlots, setWinningSlots] = useState([
    { name: 'cherry', icon: <LuCherry />, index: 7 },
    { name: 'diamond', icon: <IoDiamondOutline />, index: 2 },
    { name: 'bell', icon: <FaRegBell />, index: 3 }
  ]);
  const [win, setWin] = useState(false);
  const [isSpinned, setIsSpinned] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [coins, setCoins] = useState(1000);
  // todo: להחליף את זה למשהו אמיתי
  const [additionalPrize, setAdditionalPrize] = useState({
    icon: <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.9422 14.908L21.5783 13.5496L17.488 14.6454L14.4687 12.9023C14.5557 12.6166 14.603 12.3137 14.603 12C14.603 11.6863 14.5558 11.3835 14.4688 11.0979L17.4883 9.35461L21.5783 10.4504L21.9422 9.09202L19.2105 8.3602L22.2438 6.60891L21.5407 5.39109L18.5072 7.14248L19.2394 4.41089L17.8811 4.04677L16.7848 8.13694L13.7639 9.88111C13.3508 9.44002 12.811 9.11967 12.2029 8.9782V5.49127L15.197 2.49722L14.2026 1.50286L12.2029 3.50255V0H10.7967V3.50255L8.79698 1.50286L7.80263 2.49722L10.7967 5.49122V8.97816C10.1887 9.11963 9.64884 9.43997 9.23578 9.88097L6.21478 8.1368L5.11852 4.04672L3.76027 4.41089L4.49241 7.14244L1.45898 5.39109L0.755859 6.60891L3.78914 8.36016L1.05741 9.09197L1.42134 10.4504L5.51147 9.35456L8.53083 11.0978C8.44388 11.3835 8.39663 11.6863 8.39663 12C8.39663 12.3138 8.44383 12.6167 8.53088 12.9024L5.51161 14.6455L1.42134 13.5496L1.05741 14.908L3.78923 15.6399L0.755859 17.3911L1.45898 18.609L4.49236 16.8577L3.76027 19.5891L5.11856 19.9532L6.21478 15.8633L9.23597 14.1191C9.64898 14.5601 10.1888 14.8804 10.7967 15.0218V18.5087L7.80267 21.5028L8.79703 22.4971L10.7967 20.4975V24H12.203V20.4975L14.2027 22.4971L15.197 21.5028L12.2029 18.5088V15.0218C12.8109 14.8804 13.3507 14.5601 13.7637 14.1191L16.7848 15.8633L17.881 19.9532L19.2393 19.5891L18.5072 16.8577L21.5406 18.6089L22.2437 17.3911L19.2104 15.6398L21.9422 14.908ZM11.4998 13.6969C10.5641 13.6969 9.80292 12.9357 9.80292 12C9.80292 11.0643 10.5641 10.3031 11.4998 10.3031C12.4355 10.3031 13.1967 11.0643 13.1967 12C13.1967 12.9357 12.4355 13.6969 11.4998 13.6969Z" fill="white" />
    </svg>,
    title: "3 Days  Streak Freeze"
  });


  const slots = [
    { name: 'cherry', icon: <LuCherry />, index: 6 },
    // { name: 'cherry', icon: <LuCherry />, index: 5 },
    // { name: 'cherry', icon: <LuCherry />, index: 4 },
    // { name: 'cherry', icon: <LuCherry />, index: 3 },
    // { name: 'cherry', icon: <LuCherry />, index: 2 },
    // { name: 'cherry', icon: <LuCherry />, index: 7 },
    { name: 'diamond', icon: <IoDiamondOutline />, index: 5 },
    { name: 'bell', icon: <FaRegBell />, index: 4 },
    { name: 'clover', icon: <LuClover />, index: 3 },
    { name: 'lemon', icon: <FaRegLemon />, index: 2 },
    { name: 'currency', icon: <HiOutlineCurrencyYen />, index: 7 }
  ];

  // מערך שישמש כסרט נע
  const scrolls = 8;
  let belt = Array(scrolls).fill(slots).flat();


  // המספרים צריכים להיות בין 2 ל-7
  const spin = async () => {
    if (win || isSpinned) return;
    setIsSpinned(true);
    setWin(data.isWin);
    // const randomSlots = [];
    // for (let i = 0; i < 3; i++) {
    //   const randomSlot = slots[Math.floor(Math.random() * slots.length)];
    //   randomSlots.push(randomSlot);
    // }
    if (data?.values.length == 1) {
      let WSlot = slots.find(slot => slot.name === data?.values[0])
      setWinningSlots([WSlot, WSlot, WSlot]);
    } else {
      let LSlot = slots.find(slot => slot.name === data?.values[0])
      let LSlot2 = slots.find(slot => slot.name === data?.values[1])
      let LSlot3 = slots.find(slot => slot.name === data?.values[2])
      setWinningSlots([LSlot, LSlot2, LSlot3]);
    }
  }

  // שינוי למסך ניצחון בדיליי כדי לתת לאנימציה זמן לפעול
  useEffect(() => {
    if (win) {
      const timer = setTimeout(() => {
        setShowWin(true);
      }, 5500);
      return () => clearTimeout(timer); // Cleanup the timer
    } else {
      setShowWin(false);
    }
  }, [win]);

  // בדיקה אם יש ניצחון
  // useEffect(() => {
  //   if (winningSlots.every(slot => slot.name === winningSlots[0].name)) {
  //     setWin(true);
  //   } else {
  //     setWin(false);
  //   }
  // }, [winningSlots]);

  const coinsIcon = <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.00126 12.1616C10.1279 12.1616 12.6626 9.62693 12.6626 6.50028C12.6626 3.37364 10.1279 0.838993 7.00126 0.838993C3.87462 0.838993 1.33997 3.37364 1.33997 6.50028C1.33997 9.62693 3.87462 12.1616 7.00126 12.1616ZM7.00126 12.7906C10.4753 12.7906 13.2916 9.97433 13.2916 6.50028C13.2916 3.02623 10.4753 0.209961 7.00126 0.209961C3.52721 0.209961 0.710938 3.02623 0.710938 6.50028C0.710938 9.97433 3.52721 12.7906 7.00126 12.7906Z" fill="#FFD05B" />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.26076 3.96529C7.69201 3.68271 7.04477 3.5996 6.42309 3.72932C5.8014 3.85904 5.2414 4.19404 4.83312 4.68048C4.42483 5.16691 4.19199 5.77652 4.17202 6.41128C4.15205 7.04603 4.34611 7.66907 4.72301 8.18021C5.09991 8.69135 5.63775 9.06089 6.25004 9.22943C6.86234 9.39797 7.51353 9.35571 8.09891 9.10945C8.68429 8.86318 9.16985 8.42722 9.47753 7.87166L10.0278 8.1764C9.65176 8.85543 9.0583 9.38827 8.34284 9.68926C7.62737 9.99025 6.83147 10.0419 6.08311 9.83591C5.33474 9.62992 4.67739 9.17825 4.21673 8.55352C3.75608 7.92879 3.51889 7.16731 3.54329 6.39149C3.5677 5.61568 3.85229 4.87061 4.35131 4.27608C4.85032 3.68154 5.53477 3.27209 6.2946 3.11355C7.05444 2.95501 7.84551 3.05658 8.54064 3.40195C9.23577 3.74732 9.79457 4.31642 10.1272 5.01774L9.55884 5.28729C9.28669 4.71348 8.8295 4.24786 8.26076 3.96529Z" fill="#FFD05B" />
    <path d="M7.63029 6.50028C7.63029 6.84769 7.34866 7.12932 7.00126 7.12932C6.65385 7.12932 6.37223 6.84769 6.37223 6.50028C6.37223 6.15288 6.65385 5.87125 7.00126 5.87125C7.34866 5.87125 7.63029 6.15288 7.63029 6.50028Z" fill="#FFD05B" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.39442 7.58636L10.3116 8.09428L10.21 8.2777C9.81114 8.99788 9.18171 9.56302 8.42288 9.88225C7.66406 10.2015 6.81992 10.2563 6.0262 10.0378C5.23248 9.81931 4.53529 9.34026 4.04671 8.67768C3.55814 8.01509 3.30657 7.20745 3.33246 6.38462C3.35835 5.56178 3.66019 4.77156 4.18944 4.14099C4.7187 3.51043 5.44463 3.07616 6.25051 2.90801C7.0564 2.73986 7.89542 2.84759 8.63268 3.21389C9.36994 3.58019 9.9626 4.18378 10.3154 4.9276L10.4052 5.11705L9.45798 5.56631L9.36813 5.37686C9.11614 4.84556 8.69281 4.41443 8.1662 4.15278C7.63959 3.89114 7.04029 3.81418 6.46465 3.93429C5.88902 4.0544 5.3705 4.36459 4.99246 4.815C4.61442 5.2654 4.39882 5.82985 4.38033 6.41758C4.36184 7.00532 4.54153 7.58221 4.89051 8.05548C5.23949 8.52876 5.73749 8.87093 6.30443 9.02699C6.87137 9.18304 7.47433 9.14392 8.01635 8.91589C8.55836 8.68787 9.00796 8.2842 9.29284 7.76979L9.39442 7.58636ZM7 11.9516C10.0108 11.9516 12.4516 9.51084 12.4516 6.5C12.4516 3.48916 10.0108 1.04839 7 1.04839C3.98916 1.04839 1.54839 3.48916 1.54839 6.5C1.54839 9.51084 3.98916 11.9516 7 11.9516ZM13.5 6.5C13.5 10.0899 10.5899 13 7 13C3.41015 13 0.5 10.0899 0.5 6.5C0.5 2.91015 3.41015 0 7 0C10.5899 0 13.5 2.91015 13.5 6.5ZM9.55758 5.28701C9.28543 4.7132 8.82824 4.24758 8.2595 3.965C7.69075 3.68243 7.04351 3.59932 6.42183 3.72904C5.80014 3.85875 5.24014 4.19376 4.83186 4.6802C4.42357 5.16663 4.19073 5.77623 4.17076 6.41099C4.15079 7.04575 4.34485 7.66878 4.72175 8.17992C5.09865 8.69106 5.63649 9.06061 6.24878 9.22915C6.86108 9.39769 7.51227 9.35543 8.09765 9.10916C8.68303 8.8629 9.16859 8.42694 9.47627 7.87137L10.0266 8.17612C9.99259 8.23745 9.95685 8.29759 9.91941 8.35647C9.5423 8.94951 8.99242 9.41517 8.34158 9.68898C7.62611 9.98997 6.83021 10.0416 6.08185 9.83562C5.33348 9.62963 4.67613 9.17796 4.21547 8.55324C3.75482 7.92851 3.51763 7.16703 3.54203 6.39121C3.56644 5.6154 3.85103 4.87033 4.35005 4.27579C4.84906 3.68126 5.53351 3.27181 6.29334 3.11326C7.05318 2.95472 7.84425 3.0563 8.53938 3.40167C9.17173 3.71585 9.69126 4.21516 10.0303 4.83073C10.064 4.89184 10.0959 4.9541 10.1259 5.01744C10.1259 5.01743 10.1259 5.01744 10.1259 5.01744L9.55758 5.28701ZM7.83871 6.5C7.83871 6.96321 7.46321 7.33871 7 7.33871C6.53679 7.33871 6.16129 6.96321 6.16129 6.5C6.16129 6.03679 6.53679 5.66129 7 5.66129C7.46321 5.66129 7.83871 6.03679 7.83871 6.5ZM7 12.1613C10.1266 12.1613 12.6613 9.62664 12.6613 6.5C12.6613 3.37336 10.1266 0.83871 7 0.83871C3.87336 0.83871 1.33871 3.37336 1.33871 6.5C1.33871 9.62664 3.87336 12.1613 7 12.1613ZM7 12.7903C10.474 12.7903 13.2903 9.97405 13.2903 6.5C13.2903 3.02595 10.474 0.209677 7 0.209677C3.52595 0.209677 0.709677 3.02595 0.709677 6.5C0.709677 9.97405 3.52595 12.7903 7 12.7903ZM7 7.12903C7.3474 7.12903 7.62903 6.8474 7.62903 6.5C7.62903 6.15259 7.3474 5.87097 7 5.87097C6.65259 5.87097 6.37097 6.15259 6.37097 6.5C6.37097 6.8474 6.65259 7.12903 7 7.12903Z" fill="#FFD05B" />
  </svg>

  return (
    <>
      <main className={styles.slotMachine}>
        {showWin ? <div className={styles.winContainer}>
          <div className={styles.win}>
            <h2>Congratulations!</h2>
            <div className={styles.tripel}>
              {winningSlots.map((slot, index) =>
                <div key={index} className={styles.slot}>
                  {slot.icon}
                </div>
              )}
            </div>
            <p>You won +{coins} {coinsIcon}</p>
          </div>
          {additionalPrize && <>
            <h1>+</h1>
            <div className={styles.plus}>
              <div>{additionalPrize?.icon}</div>
              <p>{additionalPrize?.title}</p>
            </div>
            <Button
              onClick={() => nav('/')}
              style={{ width: "100%", fontSize: "17px" }}>
              Continue
            </Button>
          </>}
        </div> : <>
          <h2>You're in Luck today!</h2>
          <div className={styles.slots}>
            <div className={styles.arrows}>
              <div className={styles.left}></div>
              <div className={styles.right}></div>
            </div>
            {winningSlots.map((slot, index) => (
              <div key={index} className={styles.slot}>
                <div className={styles.belt} key={isSpinned} style={{
                  "--index": index,
                  "--scrollTo": isSpinned ? `-${(76 * 6 * scrolls) - (76 / 2) - (76 * slot.index)}px` : '0px'
                }}>
                  {belt.map((beltSlot, beltIndex) =>
                    <div key={beltIndex} className={beltSlot.name === slot.name ? styles.active : ''}>
                      {beltSlot.icon}
                    </div>)
                  }
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btns}>
            <Button
              onClick={spin}
              style={{ width: "100%", fontSize: "17px" }}
              disabled={isSpinned}
              classname={isSpinned ? styles.inActive : ''}>
              Spin
            </Button>
            <button className={styles.skip} onClick={() => nav('/')}>Skip for today</button>
          </div>
        </>}
      </main>
      <Footer />
    </>
  );
}
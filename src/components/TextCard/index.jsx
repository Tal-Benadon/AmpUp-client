import ChallengeName from '../ChallengeName'
import styles from './style.module.scss'
import { FaPause } from "react-icons/fa6";
import { play, play1, play2 } from './pics';


import React, { useEffect, useMemo, useState } from 'react'
import Button from '../Button';

export default function TextCard({ data, title, isArchive, func }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audio] = useState(new Audio(`${data.media.path}`));

  useEffect(() => {
    let interval
    setDuration(audio.duration)

    if (isPlaying) {
      audio.play();

      interval = setInterval(() => {
        setCurrentTime(audio.currentTime);
      }, 1000);
    } else {
      audio.pause();
    }

    return () => clearInterval(interval);
  }, [isPlaying, audio]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipAhead = (seconds) => {
    audio.currentTime = Math.min(audio.currentTime + seconds, audio.duration);
  };

  const skipBack = (seconds) => {
    audio.currentTime = Math.max(audio.currentTime - seconds, 0);
  };


  const random = useMemo(() => {
    return Array.from({ length: 100 }, () => Math.floor(Math.random() * 40) + 10);
  }, []);



  const calculatePercentage = () => {
    return (currentTime / duration) * 100;
  }

  const lines = useMemo(() => {
    return Array.from({ length: 100 }, (_, index) => (
      <div key={index} className={styles.line} style={{ height: `${random[index]}px`, backgroundColor: `${index <= calculatePercentage() ? '#FFD05B' : ''}` }}>
      </div>
    ));
  }, [currentTime]);

  return (
    <div className={styles.TextCard}>
      <div className={styles.play}>
        <div onClick={() => skipBack(10)}>{play1}</div>
        <div className={styles.playpause}>
          <div className={styles.playpause} onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <div>{play}</div>}
          </div>
        </div>
        <div onClick={() => skipAhead(10)}>{play2}</div>
        <div className={styles.linesContainer}>
          {lines}
        </div>
      </div>

        <ChallengeName text={title} />
        <div className={styles.title}>{data.title}</div>
        <div className={styles.Text}>
          <div className={styles.content}>{data.content}</div>
      {!isArchive && <div className={styles.buttonContainer}><Button
        classname={styles.doneButton}
        onClick={()=>func('')}>Done</Button></div>}
        </div>
      {/* <button onClick={()=> func('')}>זה רק לבינתיים</button> */}
    </div>
  )
}

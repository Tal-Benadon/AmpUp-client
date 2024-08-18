import React, { useState, useRef } from 'react';
import styles from "./style.module.scss";
import ChallengeName from '../ChallengeName';
import Element from '../Element';

export default function VideoCard({ data, title, func }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const [numbersIcon, setnumbersIcon] = useState(null);


  const handlenumbers = (index) => {
    return () => {
      setnumbersIcon(index);
      console.log(numbersIcon);
      setTimeout(() => {
        func(index)
      }, 2000)
    };
  };

  const getClassName = (index) => {
    return `${styles.numbers} ${numbersIcon === index ? styles.active : ""}`;
  };
  const numbers = ["5", "10", "3"]


  const handlePlayPause = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  return (
    <div className={styles.VideoCard}>
      <ChallengeName text={title} />
      <div className={styles.videoTitle}>
        Running to come lorem ipsum
      </div>
      <div className={styles.videoControls}>
        <div className={styles.playButton} onClick={handlePlayPause}><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4092 5.40183C14.4092 6.55654 14.4092 9.44329 12.4092 10.598L5.04554 14.8494C3.04554 16.0041 0.545543 14.5607 0.545543 12.2513L0.545543 3.74851C0.545543 1.43911 3.04554 -0.00426305 5.04554 1.15044L12.4092 5.40183Z" fill="white" />
        </svg>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <video ref={videoRef} onTimeUpdate={handleTimeUpdate} style={{ display: 'none' }}>
        <source src="https://youtu.be/G1hKzCkywM8?si=cyXY9EGZTjB7J1jE" type="video/mp4" />
      </video>

      <Element>
        <div className={styles.questext}>
          <div className={styles.iconques}>
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.39245 9.08723V6.02015H4.85706C5.5463 6.02015 6.05173 5.8421 6.37337 5.48599C6.7065 5.1184 6.87306 4.67041 6.87306 4.142C6.87306 3.76292 6.7984 3.43553 6.64907 3.15984C6.49973 2.87266 6.28147 2.65441 5.9943 2.50507C5.70712 2.35574 5.37399 2.28107 4.99491 2.28107C4.58137 2.28107 4.22527 2.36723 3.9266 2.53953C3.63942 2.71184 3.41542 2.94158 3.2546 3.22876C3.09378 3.51594 3.01337 3.84907 3.01337 4.22815H0.72168C0.72168 3.49297 0.888244 2.82097 1.22137 2.21215C1.5545 1.60333 2.04271 1.12087 2.68599 0.764764C3.32927 0.397174 4.11614 0.213379 5.0466 0.213379C5.89665 0.213379 6.62609 0.379943 7.23491 0.713071C7.85522 1.03471 8.33194 1.47697 8.66506 2.03984C8.99819 2.60271 9.16476 3.24025 9.16476 3.95246V4.15923C9.16476 4.85994 8.99819 5.48599 8.66506 6.03738C8.33194 6.58876 7.83799 7.02528 7.18322 7.34692C6.53994 7.65707 5.75306 7.82364 4.8226 7.84661L5.80476 6.95061L5.7703 9.08723H3.39245ZM3.20291 13.1537V10.6035H5.95983V13.1537H3.20291Z" fill="black" />
            </svg>
          </div>
          <div>When inhaling count to...?</div>
        </div>
      </Element>
      <Element>
        <div className={styles.numbers}>
          {numbers.map((icon, index) => <div key={index} onClick={handlenumbers(index)} className={getClassName(index)}>{icon}</div>)}
        </div>
      </Element>

    </div>
  );
}

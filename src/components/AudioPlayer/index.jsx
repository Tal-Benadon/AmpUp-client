import React, { useState, useRef, useEffect } from 'react';
import styles from './style.module.scss'

const AudioPlayer = ({ audioSource }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(new Audio(audioSource));

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            const progressPercentage = (currentTime / duration) * 100;
            setProgress(progressPercentage);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            audio.currentTime = 0;
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audioRef]);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="audio-player">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <button className="play-pause-btn" onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    );
};

export default AudioPlayer;

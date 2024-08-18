import React, { useEffect, useState } from 'react';
import styles from "./style.module.scss";

export default function Popup({ title, content, header, footer, handleClosePopup, type }) {
    
    const [timeSinceMessage, setTimeSinceMessage] = useState('');

    function timeSince(date) {
        const now = new Date();
        const past = new Date(date);
        const diffInSeconds = Math.floor((now - past) / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInSeconds < 60) {
            return `עברו ${diffInSeconds} שניות`;
        } else if (diffInMinutes < 60) {
            return `עברו ${diffInMinutes} דקות`;
        } else if (diffInHours < 24) {
            return `עברו ${diffInHours} שעות`;
        } else {
            return `עברו ${diffInDays} ימים`;
        }
    }

    useEffect(() => {
        const initialDate = new Date(); // התאריך שבו הקומפוננטה נטענה
        const updateInterval = 60000; // 60 שניות

        const updateTimeSinceMessage = () => {
            setTimeSinceMessage(timeSince(initialDate));
        };

        updateTimeSinceMessage(); // עדכון ראשוני

        const intervalId = setInterval(updateTimeSinceMessage, updateInterval);

        return () => clearInterval(intervalId); // ניקוי ה-interval כאשר הקומפוננטה מתנקה
    }, []);

    return (
        <div className={styles.popup}>
            <div className={styles.popupHeader}>
                <div className={styles.popupHeader}>
                    {type=="message" ? <div>✉️</div> :<div>❗</div>}
                     AMPUP  <div className={styles.dot}>⚪</div>now
                </div>
                <p className={styles.x} onClick={handleClosePopup}>X</p>
            </div>
            <div className={styles.popupContent}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className={styles.popupBottom}>
                {footer}
            </div>
        </div>
    );
}

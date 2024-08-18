import styles from './style.module.scss'

export default function Dots({ today, totalDays, arrDone }) {
    console.log({ arrDone });
    console.log({ totalDays });
    console.log({ today });


    const arrDate = Array.from({ length: totalDays }, (_, i) => i + 1) //IE List of length equals to totalDays
    const isFutureDate = (date) => parseInt(date) > parseInt(today);
    return (
        <div className={styles.Sequence}>
            {arrDate.map((date) => <div key={date} id={date} className={`
                ${date === today ? styles.today : ""}
                ${arrDone.includes(date) ? styles.done : styles.notdone}
                ${isFutureDate(date) ? styles.date : ''}
                `}
            ></div>)}
        </div>
    )
}

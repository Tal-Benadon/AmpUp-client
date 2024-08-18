import { useParams } from 'react-router-dom'
import IconProgressBar from '../IconProgressBar'
import styles from './style.module.scss'

export default function ProgressBar({ cardsOfToday}) {
    let {cardId} = useParams()
    cardsOfToday = cardsOfToday.filter(c => c.cardType != "lottery")
    
    return (
        <div className={styles.Icon}>
            {/* {typeList && typeList.map((item, i) => <div key={i} className={`${styles.IconProgressBar} ${progress == i ? styles.active : ""} ${progress > i ? styles.done : ""}`}> <IconProgressBar type={item} /></div>)} */}
            {cardsOfToday && cardsOfToday.map((item, i) => <div key={i} className={`${styles.IconProgressBar} ${cardId == item._id ? styles.active : ""} ${item.done ? styles.done : ""}`}> <IconProgressBar type={item.cardType} /></div>)}
        </div>
    )
}

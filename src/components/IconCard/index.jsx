import styles from './style.module.scss'


export default function IconCard({children}) {
    return (
        <div className={styles.iconCard}>
            {children}
        </div>
    )
}

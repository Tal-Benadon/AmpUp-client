import styles from './style.module.scss'

export default function Title({content}) {
  return (
    <h1 className={styles.Title}>{content}</h1>
  )
}

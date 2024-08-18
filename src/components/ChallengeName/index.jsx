import React from 'react'
import styles from "./style.module.scss"
export default function ChallengeName({ text = "" }) {
  return (
    <div className={styles.ChallengeName}>
      {text}
      <div className={styles.separator}></div>
    </div>
  )
}

import React from 'react'
import styles from './style.module.scss'

export default function Textarea({ placeholder, name, ...props }) {
    let dots = <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13.5" cy="1.5" r="1.5" transform="rotate(90 13.5 1.5)" fill="white" />
        <circle cx="7.5" cy="7.5" r="1.5" transform="rotate(90 7.5 7.5)" fill="white" />
        <circle cx="13.5" cy="7.5" r="1.5" transform="rotate(90 13.5 7.5)" fill="white" />
        <circle cx="1.5" cy="13.5" r="1.5" transform="rotate(90 1.5 13.5)" fill="white" />
        <circle cx="7.5" cy="13.5" r="1.5" transform="rotate(90 7.5 13.5)" fill="white" />
        <circle cx="13.5" cy="13.5" r="1.5" transform="rotate(90 13.5 13.5)" fill="white" />
    </svg>

    return (
        <div style={{ position: 'relative' }}>
            <textarea
                name={name}
                placeholder={placeholder}
                rows="7"
                cols="47"
                {...props}
                className={styles.Textarea} />
            <div className={styles.dotsPosition}>{dots}</div>
        </div>
    )
}

import styles from './style.module.scss'

export default function Logo() {
    return (
        <div className={styles.logo}>
            <svg width="23" height="23" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_386_10462)">
                    <path d="M24.2272 13.5002C24.2272 19.7009 19.2006 24.7275 13 24.7275C6.79932 24.7275 1.77271 19.7009 1.77271 13.5002C1.77271 7.29956 6.79932 2.27295 13 2.27295C19.2006 2.27295 24.2272 7.29956 24.2272 13.5002Z" stroke="white" strokeWidth="3" />
                    <path d="M13 9.95459L18.1174 15.2728H7.88257L13 9.95459Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_386_10462">
                        <rect width="26" height="26" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                </defs>
            </svg>
            <div className={styles.title}>AmpUp</div>
        </div>
    )
}

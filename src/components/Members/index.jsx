import styles from './style.module.scss'
export default function Members({ members }) {

    // const member = ['Member1.png', 'Member2.png', 'Member3.png', 'Member1.png']
    return (
        <div className={styles.memberContainer}>
            <div className={styles.line}></div>
            <div>
                <div className={styles.member}>
                    {members.length} Members
                </div>
                {members.map((member) =>
                    <img className={styles.profileImg} src={`${member.img ? member.img : '/defaultPlaceholder.webp'}`} alt="member img" />
                )}
            </div>
        </div>
    )
}

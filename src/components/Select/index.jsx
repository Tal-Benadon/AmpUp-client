import styles from './style.module.scss'

export default function Select({ arrSelect, placeholder, onChange }) {
    // console.log(arrSelect);

    return (
        <div className={styles.selectContainer}>

            <select name="select" id="select" defaultValue={''} onChange={onChange} className={styles.select} >
                <option value="" disabled>Subject</option>
                {arrSelect.map((item, index) => (
                    <option key={index} className={styles.select} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

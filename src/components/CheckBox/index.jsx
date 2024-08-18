import styles from './style.module.scss'

export default function CheckBox({onChange,name}) {
  return (
   
    <label className={styles.checkBox}>
    <input name = {name} type="checkbox"  onChange={onChange}/>
    <span className={styles.point}></span>
  </label>
   
  )
}

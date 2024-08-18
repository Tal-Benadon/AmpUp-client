import styles from './style.module.scss'

export default function Input({ type, name, onChange, placeholder, borderRadius = "7px", ...props }) {
  return (
    <input className={styles.input} onChange={onChange} name={name} type={type} placeholder={placeholder} style={{ borderRadius: borderRadius }}  {...props} />
  )
}

import styles from './Sidebar.module.scss'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>

    <div className={styles.menu}>
      <a className={styles.link}>Архитектура</a>
      <a className={styles.link}>Благоустройство</a>
      <a className={styles.link}>Безопасность</a>
      <a className={styles.link}>Инженерия</a>
      <a className={styles.link}>Инфроструктура</a>
      <a className={styles.link}>Транспортная доступность</a>
    </div>
      
    </aside>
  )
}
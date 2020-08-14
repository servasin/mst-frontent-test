import styles from './Sidebar.module.scss'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>

    <div className={styles.menu}>
      <a className={styles.link} href="#">Архитектура</a>
      <a className={styles.link} href="#">Благоустройство</a>
      <a className={styles.link} href="#">Безопасность</a>
      <a className={styles.link} href="#">Инженерия</a>
      <a className={styles.link} href="#">Инфроструктура</a>
      <a className={styles.link} href="#">Транспортная доступность</a>
    </div>
      
    </aside>
  )
}
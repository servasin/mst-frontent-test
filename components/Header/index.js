import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>

      <img className={styles.logoIcon} src="/images/IconLogo.svg"/>

      <p className={styles.logoText}>Первомайская</p>

      <div className={styles.links}>
        <a className={styles.link} href="#">О комплексе</a>
        <a className={styles.link} href="#">Особенности</a>
        <a className={styles.link} href="#">Пентхаусы</a>
        <a className={styles.link} href="#">Выбрать квартиру</a>
      </div>

      <a className={styles.tel} href="tel:88888888">8 888 88 88</a>

      <img className={styles.rightImg} src="/images/Burger.svg"/>
      
    </header>
  )
}
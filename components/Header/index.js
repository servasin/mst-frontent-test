import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>

      <img className={styles.logoIcon} src="/images/IconLogo.svg"/>

      <p className={styles.logoText}>Первомайская</p>

      <div className={styles.menu}>
        <Link href="/">
          <a className={styles.link}>О комплексе</a>
        </Link>
        <Link href="/features">
          <a className={styles.link}>Особенности</a>
        </Link>
        <Link href="/penthouses">
          <a className={styles.link}>Пентхаусы</a>
        </Link>
        <Link href="/apartment">
          <a className={styles.link}>Выбрать квартиру</a>
        </Link>
      </div>

      <a className={styles.tel} href="tel:88888888">8 888 88 88</a>

      <img className={styles.rightImg} src="/images/Burger.svg"/>
      
    </header>
  )
}
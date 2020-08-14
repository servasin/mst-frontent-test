import styles from './View.module.scss'

export default function View(props) {
  return (
    <div className={styles.view}>

    <div className={styles.block}>
      <div className={styles.content}>
        <h3 className={styles.title}>{ props.info.title }</h3>
        <p className={styles.text}>{ props.info.text }</p>
      </div>
    </div>
    
    <img className={styles.image} src={`/images/${props.info.img}`} />

    </div>
  )
}
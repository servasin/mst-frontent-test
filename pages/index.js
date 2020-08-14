import Layout from 'components/Layout'
import Sidebar from 'components/Sidebar'
import View from 'components/View'
import styles from '../styles/pages/Home.module.scss'

const architecture = {
  title: 'Архитектура',
  text: `Оригинальная архитектура жилого комплекса бизнес-класса
   «Первомайская» формирует современный стиль жизни`,
  img: 'architecture.jpg',
}

export default function Home() {
  return (
    <Layout>
      <div className={styles.page}>

        <Sidebar />

        <View info={architecture} />

      </div>
    </Layout>
  )
}

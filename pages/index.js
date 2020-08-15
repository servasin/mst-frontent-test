import React, { useState } from 'react'
import Layout from 'components/Layout'
// import Sidebar from 'components/Sidebar'
import View from 'components/View'
import styles from '../styles/pages/Home.module.scss'

const architecture = {
  title: 'Архитектура',
  text: `Оригинальная архитектура жилого комплекса бизнес-класса
   «Первомайская» формирует современный стиль жизни`,
  img: 'architecture.jpg',
}

const improvement= {
  title: 'Благоустройство',
  text: `Современный двор европейского уровня — территория для детей,
   игр на свежем воздухе и вечерних`,
  img: 'improvement.jpg',
}

const safety = {
  title: 'Безопасность',
  text: `Современный двор европейского уровня — территория для детей,
   игр на свежем воздухе и вечерних`,
  img: 'safety.jpg',
}

const engineering = {
  title: 'Инженерия',
  text: `Современный двор европейского уровня — территория для детей,
   игр на свежем воздухе и вечерних`,
  img: 'engineering.jpg',
}

const infrastructure = {
  title: 'Ифроструктура',
  text: `Современный двор европейского уровня — территория для детей,
   игр на свежем воздухе и вечерних`,
  img: 'infrastructure.jpg',
}

const transport = {
  title: 'Транспортная доступность',
  text: `Современный двор европейского уровня — территория для детей,
   игр на свежем воздухе и вечерних`,
  img: 'transport.jpg',
}

export default function Home() {
  const [view, setView] = useState('architecture');

  return (
    <Layout>
      <div className={styles.page}>

        <aside className={styles.sidebar}>
          <div className={styles.menu}>
            <a className={styles.link} onClick={() => setView('architecture')}>Архитектура</a>
            <a className={styles.link} onClick={() => setView('improvement')}>Благоустройство</a>
            <a className={styles.link} onClick={() => setView('safety')}>Безопасность</a>
            <a className={styles.link} onClick={() => setView('engineering')}>Инженерия</a>
            <a className={styles.link} onClick={() => setView('infrastructure')}>Инфроструктура</a>
            <a className={styles.link} onClick={() => setView('transport')}>Транспортная доступность</a>
          </div>
        </aside>

        { view === 'architecture' && <View info={architecture} /> }
        { view === 'improvement' && <View info={improvement} /> }
        { view === 'safety' && <View info={safety} /> }
        { view === 'engineering' && <View info={engineering} /> }
        { view === 'infrastructure' && <View info={infrastructure} /> }
        { view === 'transport' && <View info={transport} /> }

      </div>
    </Layout>
  )
}

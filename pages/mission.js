import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Logo from '../components/logo'
import styles from '../components/mission.module.css'
import stylesBG from '../components/index.module.css'

export default function Mission() {
  return (
    <Layout>
      <Head>
        <title>Kaller mission</title>
      </Head>
      <div className={styles.mission_bg}>
        <h1 className={styles.mission_title}>Mission</h1>
        <div className={styles.mission_logo}>
          <Link href="/">
            <a><Logo /></a>
          </Link>
        </div>
        <p className={styles.mission_text}>
          Мы создаем технологию, которая выведет традиционные бизнес-коммуникации
          на новый качественный уровень, предоставляя уровень сервиса крупного бизнеса для
          каждого пользователя в его смартфоне.
        </p>
        <h2 className={styles.mission_subtitle}>Team</h2>
        <div className={stylesBG.index_bg}>
          <Image
            alt="New York"
            src="/images/new-york.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Layout>
  )
}

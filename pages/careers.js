import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/logo'
import Layout from '../components/layout'
import styles from '../components/careers.module.css'
import PositionPreview from '../components/position_preview'

export default function Careers() {
  const items = [
    {
      title: "Change Engineer",
      type: "Full-Time",
      pid: "1"
    },
    {
      title: "Apllication Development Specialist",
      type: "Temporary",
      pid: "2"
    },
    {
      title: "Senior Accountant",
      type: "Remote",
      pid: "3"
    }
  ]

  const positions = items.map((item) => {
    return (
      <PositionPreview
        props = {{
          title: item.title,
          type: item.type,
          pid: item.pid
        }}
      />
    );
  });

  return (
    <Layout>
      <Head>
        <title>Kaller careers</title>
      </Head>
      <h1>Careers</h1>
      <div className={styles.careers_logo}>
        <Link href="/">
          <a><Logo /></a>
        </Link>
      </div>
      <div className={styles.careers_container}>
        <p className={styles.careers_leed}>
            Kaller ищет таланты, готовые взяться за сложные задачи на переднем
            крае IT. Мы предлагаем конкуретноспособную заработную плату,
            комфортные условия труда и отличное техническое оснащение.
        </p>
        <p className={styles.careers_leed}>Email для связи: <a href="mailto:hr@kaller.io">hr@kaller.io</a></p>
        <h2 className={styles.careers_positions}>Open position</h2>
        {positions}
      </div>
    </Layout>
  )
}

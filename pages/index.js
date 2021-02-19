import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Logo from '../components/logo'
import MainNavigation from '../components/main_navigation'
import styles from '../components/index.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kaller</title>
      </Head>
      <div className={styles.index_head}>
        <h1 className={styles.index_title}>Kaller</h1>
        <div className={styles.index_leed}>
          Mobile applications VOIP, SIP
        </div>
      </div>
      <MainNavigation />
      <div className={styles.index_logo}>
        <Logo />
      </div>
      <div className={styles.index_bg}>
        <Image
          alt="Israel"
          src="/images/israel.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Layout>
  )
}

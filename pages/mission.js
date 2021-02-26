import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Logo from '../components/logo'
import styles from '../components/mission.module.css'
import stylesBG from '../components/index.module.css'

function Mission({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className={styles.mission_bg}>
        <h1 className={styles.mission_title}>{data.title}</h1>
        <div className={styles.mission_logo}>
          <Link href="/">
            <a><Logo /></a>
          </Link>
        </div>
        <p className={styles.mission_text}>
          {data.body}
        </p>
        <h2 className={styles.mission_subtitle}>Team</h2>
        <div className={stylesBG.index_bg}>
          <Image
            alt="New York"
            src="/images/new-york.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
          />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.cms + `/get-node?nid=4`)
  const data = await res.json()
  return { props: { data } }
}

export default Mission

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/logo'
import Layout from '../components/layout'
import styles from '../components/careers.module.css'
import PositionItem from '../components/position_item'

function Careers ({ data, positions }) {

  const positionList = positions.map((item) => {
    return (
      <PositionItem
        props = {item}
        key = {item.nid}
      />
    )
  })

  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{data.title}</h1>
      <div className={styles.careers_logo}>
        <Link href="/">
          <a><Logo /></a>
        </Link>
      </div>
      <div className={styles.careers_container}>
        <p className={styles.careers_leed}>
            {data.body}
        </p>
        <p className={styles.careers_leed}>Email: <a href="mailto:hr@kaller.io">hr@kaller.io</a></p>
        <h2 className={styles.careers_positions}>Open position</h2>
        {positionList}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res1 = await fetch(process.env.cms + `/get-node?nid=8`)
  const data = await res1.json()
  const res2 = await fetch(process.env.cms + `/get-positions`)
  const positions = await res2.json()
  return {
    props: {
      data,
      positions
    }
  }
}

export default Careers

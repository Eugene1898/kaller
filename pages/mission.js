import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';

import Logo from '../components/logo'
import styles from '../components/mission.module.css'
import stylesBG from '../components/index.module.css'

function Mission({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className={styles.mission_bg}>
        <motion.h1
          className={styles.mission_title}
          layoutId="title"
        >
          {data.title}
        </motion.h1>
        <motion.div
          className={styles.mission_logo}
          layoutId="logo"
        >
          <Link href="office">
            <a><Logo /></a>
          </Link>
        </motion.div>
        <p className={styles.mission_text}>
          {data.body}
        </p>
        <h2 className={styles.mission_subtitle}>Team</h2>
        <motion.div
          className={stylesBG.index_bg}
          initial="hidden" animate="visible" variants={{
            hidden: {
              scale: 1.1,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.1,
                duration: 2
              }
            },
          }}
        >
          <Image
            alt="New York"
            src="/images/new-york.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
          />
        </motion.div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.cms + `/get-node?nid=4`)
  const data = await res.json()
  return { props: { data } }
}

export default Mission

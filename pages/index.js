import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';

import Logo from '../components/logo'
import MainNavigation from '../components/main_navigation'
import styles from '../components/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaller</title>
      </Head>
      <div className={styles.index_head}>
        <motion.h1
          className={styles.index_title}
          initial="hidden" animate="visible" variants={{
            hidden: {
              scale: 1.1,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0
              }
            },
          }}
          layoutId="title"
        >
          Kaller
        </motion.h1>
        <div className={styles.index_leed}>
          Mobile applications VOIP, SIP
        </div>
      </div>
      <MainNavigation />
      <motion.div
        className={styles.index_logo}
        layoutId="logo"
      >
        <Link href="tech">
          <a><Logo /></a>
        </Link>
      </motion.div>
      <motion.div
        className={styles.index_bg}
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
          alt="Israel"
          src="/images/israel.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
        />
      </motion.div>
    </>
  )
}

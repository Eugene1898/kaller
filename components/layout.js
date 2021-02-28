import styles from './layout.module.css'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
      <main
        className={styles.container}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/gvu5amu.css" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </main>
    )
}

import Head from 'next/head'
import { motion } from 'framer-motion';

import styles from '../components/tech.module.css'
import Logo from '../components/logo'
import Techline from '../components/techline'
import TechlineItem from '../components/techline_item'

function Tech({ data }) {

  const techsSorted = data.sort((a, b) => b.status - a.status)

  const techs = techsSorted.map((item, i) => {
      item.i = i
      return (
        <TechlineItem
          props = {item}
          key = {i}
        />
      );
  });

  return (
    <>
      <Head>
        <title>Kaller technologies</title>
      </Head>
      <motion.h1 layoutId="title">Technologies</motion.h1>
      <Techline>
        {techs}
      </Techline>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.cms + `/get-techs`)
  const data = await res.json()
  return { props: { data } }
}

export default Tech

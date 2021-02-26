import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/tech.module.css'
import Logo from '../components/logo'
import Techline from '../components/techline'
import TechlineItem from '../components/techline_item'

function Tech({ data }) {

  const techsSorted = data.sort((a, b) => b.status - a.status)

  const techs = techsSorted.map((item, i) => {
      return (
        <TechlineItem
          props = {item}
          key = {i}
        />
      );
  });

  return (
    <Layout>
      <Head>
        <title>Kaller technologies</title>
      </Head>
      <h1>Technologies</h1>
      <Techline>
        {techs}
      </Techline>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.cms + `/get-techs`)
  const data = await res.json()
  return { props: { data } }
}

export default Tech

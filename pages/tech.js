import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/tech.module.css'
import Logo from '../components/logo'
import Techline from '../components/techline'
import TechlineItem from '../components/techline_item'

export default function Tech() {
  const items = [
    {
      title: "Application",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam. Lorem ipsum dolor sit amet, consectetuer",
      details: "Lorem ipsum dolor sit amet.",
      image: "/images/tech-1.png",
      img_desc: "Kaller application"
    },
    {
      title: "Jelly",
      desc: "Jelly is specifically designed for brevity, more specifically designed for ‘Code-golf’. Where programmers try to implement challenges in a programming language of their choice and the winner is usually the one with the fewest number of bytes or smallest number of characters.",
      details: "Lorem ipsum dolor sit amet."
    },
    {
      title: "LolCode",
      desc: "It was created in 2007 by Adam Lindsay, researcher at Lancaster University.",
      details: "Lorem ipsum dolor sit amet.",
      status: "new",
      image: "/images/tech-1.png",
      img_desc: "Kaller application"
    }
  ]

  const techs = items.map((item) => {
      return (
        <TechlineItem
          props = {{
            title: item.title,
            desc: item.desc,
            details: item.details,
            image: item.image,
            img_desc: item.img_desc,
            status: item.status
          }}
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

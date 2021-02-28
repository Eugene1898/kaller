import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

import styles from '../components/office.module.css'
import Logo from '../components/logo'

const OfficeCarousel = ( data ) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = data.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.nid}
      >
        <Image
          src={item.image}
          alt={item.alt}
          layout='fill'
          objectFit="cover"
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

function Office({ data }) {
  return (
    <>
      <Head>
        <title>Kaller office</title>
        <script type="text/javascript" src="/js/mobile-height.js"></script>
      </Head>
      <motion.h1
        className={styles.office_title}
        layoutId="title"
      >
        Office
      </motion.h1>
      <motion.div
        className={styles.office_logo}
        layoutId="logo"
      >
        <Link href="careers">
          <a><Logo /></a>
        </Link>
      </motion.div>
      {OfficeCarousel( data )}
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.cms + `/get-office`)
  const data = await res.json()
  return { props: { data } }
}

export default Office

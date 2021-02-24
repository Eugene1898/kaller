import Head from 'next/head'
import styles from '../components/office.module.css'
import Layout from '../components/layout'
import Logo from '../components/logo'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

const items = [
  {
    src: '/images/office-1.jpeg',
    altText: 'Kaller office. Hall',
    caption: 'Kaller office. Hall'
  },
  {
    src: '/images/office-2.jpeg',
    altText: 'Kaller office. Tardis',
    caption: 'Kaller office. Tardis'
  },
  {
    src: '/images/office-3.jpeg',
    altText: 'Kaller office. Android',
    caption: 'Kaller office. Android'
  }
];

const OfficeCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image
          src={item.src}
          alt={item.altText}
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
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default function Tech() {
  return (
    <Layout>
      <Head>
        <title>Kaller office</title>
        <script type="text/javascript" src="/js/mobile-height.js"></script>
      </Head>
      <h1 className={styles.office_title}>Office</h1>
      <div className={styles.office_logo}>
        <Link href="/">
          <a><Logo /></a>
        </Link>
      </div>
      {OfficeCarousel()}
    </Layout>
  )
}

import Image from 'next/image'
import { motion } from 'framer-motion';

import styles from './techline_item.module.css'

export default function TechlineItem({ props }) {
  const classItem = (props.status === '0') ?
    styles.techline_item_new_desc_container :
    styles.techline_item_desc_container;

  const imageItem = (image, img_desc, classItem) => {
    if (image) return (
      <div className={classItem}>
        <div className={styles.techline_img_container}>
          <Image
            src={image}
            alt={img_desc}
            layout='fill'
            objectFit="cover"
            className={styles.techline_img}
           />
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className={styles.techline_item_container}
      initial="hidden" animate="visible" variants={{
        hidden: {
          scale: 0.8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: props.i / 2,
            duration: 0.5
          }
        },
      }}
    >
      <h2 className={styles.techline_item_title}>{props.title}</h2>
      <div className={classItem}>
        <div className={styles.techline_item_dot} />
        <div className={styles.techline_item_desc}>{props.summary}</div>
        <div className={styles.techline_item_details}>{props.details}</div>
      </div>
      { imageItem(props.image, props.img_desc, classItem) }
    </motion.div>
  )
}

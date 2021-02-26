import styles from './techline_item.module.css'
import Image from 'next/image'

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
    <div className={styles.techline_item_container}>
      <h2 className={styles.techline_item_title}>{props.title}</h2>
      <div className={classItem}>
        <div className={styles.techline_item_dot} />
        <div className={styles.techline_item_desc}>{props.summary}</div>
        <div className={styles.techline_item_details}>{props.details}</div>
      </div>
      { imageItem(props.image, props.img_desc, classItem) }
    </div>
  )
}

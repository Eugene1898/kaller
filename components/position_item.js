import { motion } from 'framer-motion';
import styles from './position_item.module.css'

function PositionPreview({ props }) {

  return (
    <motion.div
      className={styles.position_container}
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
      <h4>Job title</h4>
      <p className={styles.position_name}>{props.title}</p>
      <h4>Employment Type</h4>
      <p className={styles.position_detail}>{props.type}</p>
    </motion.div>
  );
}

export default PositionPreview

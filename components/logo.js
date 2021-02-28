import styles from './logo.module.css'
import { motion } from 'framer-motion';

export default function Logo() {

  return (
    <div className={styles.logo_shape}>
      <div className={styles.logo_container}>
        <motion.img
          src="/images/white-hand.svg"
          alt="Kaller logo"
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{
              scale: [0.95, 0.9]
          }}
        />
      </div>
    </div>
  )
}

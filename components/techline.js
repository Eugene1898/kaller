import Link from 'next/link'
import { motion } from 'framer-motion';

import styles from './techline.module.css'
import Logo from '../components/logo'

export default function Techline({ children }) {
  return (
    <div className={styles.techline_container}>
      <div className={styles.techline_techs}>
        <motion.div
          className={styles.techline_logo}
          layoutId="logo"
        >
          <Link href="mission">
            <a><Logo /></a>
          </Link>
        </motion.div>
        {children}
      </div>
    </div>
  )
}

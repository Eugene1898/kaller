import Link from 'next/link'
import { motion } from 'framer-motion';

import styles from './main_navigation.module.css'

export default function MainNavigation() {
  const items = [
    {
      link: "tech",
      name: "Technologies",
    },
    {
      link: "mission",
      name: "Mission",
    },
    {
      link: "office",
      name: "Office",
    },
    {
      link: "careers",
      name: "Careers",
    }
  ]

  const links = items.map((link, i) => {
    return (
      <motion.li
        key={i}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href={"/" + link.link}
        >
          <a>{link.name}</a>
        </Link>
      </motion.li>
    );
  });

  return (
    <ul className={styles.main_navigation_menu}>
      {links}
    </ul>
  )
}

import styles from './techline.module.css'
import Logo from '../components/logo'
import Link from 'next/link'

export default function Techline({ children }) {
  return (
    <div className={styles.techline_container}>
      <div className={styles.techline_techs}>
        <div className={styles.techline_logo}>
          <Link href="/">
            <a><Logo /></a>
          </Link>
        </div>
        {children}
      </div>
    </div>
  )
}

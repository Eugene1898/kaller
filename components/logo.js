import styles from './logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logo_shape}>
      <div className={styles.logo_container}>
        <img
          src="/images/white-hand.svg"
          alt="Kaller logo"
          className={styles.logo}
        />
      </div>
    </div>
  )
}

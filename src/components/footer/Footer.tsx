import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <div className={styles.navItem}>1</div>
        <div className={styles.navItem}>2</div>
        <div className={styles.navItem}>3</div>
        <div className={styles.navItem}>4</div>
      </nav>
    </footer>
  )
}
